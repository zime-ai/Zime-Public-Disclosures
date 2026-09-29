// Fail if private URIs, secrets, or confidentiality markers appear anywhere in this public
// repository (Hand-Off Kit §5 and §14). Private material belongs in the private workspace.
// A line can opt out with the marker "boundary-scan: allow" when it documents a rule.
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { execSync } from 'node:child_process';
import { ROOT, reporter } from './lib/content.mjs';

const r = reporter('validate:public-boundary');
const SELF = 'scripts/validate-public-boundary.mjs';

const RULES = [
	['private URI', /private:\/\//i],
	['private key', /-----BEGIN [A-Z ]*PRIVATE KEY-----/],
	['AWS access key', /\bAKIA[0-9A-Z]{16}\b/],
	['GitHub token', /\bgh[pousr]_[A-Za-z0-9]{30,}\b/],
	['Slack token', /\bxox[abprs]-[A-Za-z0-9-]{10,}\b/],
	['API secret key', /\b(sk|rk)-[A-Za-z0-9_-]{20,}\b/],
	['Google API key', /\bAIza[0-9A-Za-z_-]{35}\b/],
	['confidentiality marker', /\b(CONFIDENTIAL|INTERNAL ONLY|DO NOT PUBLISH|NOT FOR PUBLICATION)\b/],
	['private visibility', /^visibility:\s*private\s*$/m],
	['restricted source tag', /\brestricted_source\b|\bpermission_status:\s*restricted\b/],
];

// Tracked and staged files, so the check matches what would actually be pushed.
const files = execSync('git ls-files --cached --others --exclude-standard', { cwd: ROOT })
	.toString()
	.split('\n')
	.filter((f) => f && f !== SELF && !/\.(png|jpe?g|gif|webp|ico|pdf|woff2?)$/i.test(f) && f !== 'package-lock.json');

for (const file of files) {
	let text;
	try { text = readFileSync(join(ROOT, file), 'utf8'); } catch { continue; }
	text.split('\n').forEach((line, i) => {
		if (line.includes('boundary-scan: allow')) return;
		for (const [label, re] of RULES) if (re.test(line)) r.error(`${file}:${i + 1}`, `${label} found`);
	});
}

console.log(`scanned ${files.length} file(s)`);
r.finish();

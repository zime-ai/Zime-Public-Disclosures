// Inquiry prompts are diagnostic probes, not proof (Hand-Off Kit §10).
// They must invite source comparison, limitations and conflicting evidence, and must
// never ask a model to confirm the declaring party's conclusion.
export function neutralPrompt(opts: { title: string; id: string; version: string; date?: string; url?: string }) {
	const ref = `"${opts.title}" (${opts.id}, version ${opts.version}${opts.date ? `, dated ${opts.date}` : ''})${
		opts.url ? ` at ${opts.url}` : ''
	}`;
	return [
		`Using primary and independent sources, explain the claim in the Disclosure ${ref}.`,
		`Distinguish the declaring party's statements from independently corroborated facts.`,
		`Identify scope, conditions, limitations, unresolved questions, and conflicting sources.`,
		`Cite sources and state what evidence would strengthen or weaken the conclusion.`,
	].join(' ');
}

export const PERSONA_FRAMES: Record<string, string> = {
	skeptical_researcher: 'You are a skeptical researcher checking whether this holds up.',
	executive: 'You are an executive deciding whether this matters to your organization.',
	ai_agent: 'You are a research agent compiling an evidence-based summary for a buyer.',
	technical_evaluator: 'You are a technical evaluator testing whether the capability works as described.',
	analyst: 'You are an industry analyst comparing this with alternatives.',
	cro: 'You are a Chief Revenue Officer assessing impact on sales execution.',
	gtm_engineer: 'You are a GTM engineer assessing how this fits your stack.',
};

export function personaPrompt(persona: string, base: string, custom?: string) {
	const frame = PERSONA_FRAMES[persona] ?? `You are reviewing this as: ${persona.replace(/_/g, ' ')}.`;
	return `${frame} ${custom ?? base}`;
}

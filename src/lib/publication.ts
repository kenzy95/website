/**
 * Un article est visible s'il n'est pas en brouillon ET si sa date de publication est passée.
 * Permet de committer des articles datés dans le futur : ils sortent au build du jour J
 * (déclenché par le workflow .github/workflows/publication-programmee.yml).
 * En développement (`npm run dev`), les articles datés dans le futur sont affichés pour relecture.
 */
export const isPublished = ({ data }: { data: { draft: boolean; publishedAt: Date } }): boolean =>
  !data.draft && (import.meta.env.DEV || data.publishedAt.getTime() <= Date.now());

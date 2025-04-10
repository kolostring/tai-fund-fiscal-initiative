export default async function getActionAgendaResources() {
  const STORYBLOK_TOKEN = import.meta.env.STORYBLOK_TOKEN;
  const STORYBLOK_VERSION = import.meta.env.STORYBLOK_VERSION;

  const res = await fetch(
    `https://api.storyblok.com/v2/cdn/stories/action-agenda-resources?version=${STORYBLOK_VERSION}&token=${STORYBLOK_TOKEN}`,
  );
  const json = await res.json();
  const resources = json.story.content.articles as
    | {
        link: string;
        image: { filename: string } | undefined;
        title: string;
      }[]
    | undefined;
  return resources;
}

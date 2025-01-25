;
import StartupCard, { StartupTypeCard } from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";
// import { client } from "@/sanity/lib/client";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";


export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const params = {search: query || null}

  // const posts = await client.fetch(STARTUPS_QUERY)

  const {data: posts} = await sanityFetch({query: STARTUPS_QUERY, params: params})

  console.log(JSON.stringify(posts, null, 2));

  // const posts = [{
  //   _createdAt: new Date(),
  //   views: 55,
  //   author:{_id: 1, name: 'John'},
  //   title: 'The Ai Masters',
  //   description: 'AI is revolutionizing various industries, but its impact on business is vast and complex.',
  //   image: 'https://itchronicles.com/wp-content/uploads/2020/11/where-is-ai-used.jpg',
  //   category: 'Business',

    
  // }]
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br />
          Connect with other Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and get Noticed in virtual Competitions
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : 'All Startups'}
        </p>
        <ul className="mt-7 card_grid">
      {posts ?. length > 0 ? (
        posts.map((post: StartupTypeCard) =>(
          <StartupCard key={post?._id} post={post}/>
        ))
      ): (
        <p className="no-results">No Startups found</p>
      )}
        </ul>
      </section>
      <SanityLive/>
    </>
  );
}

import gsap from "gsap";

export default function BlogList({ posts }: any) {
  console.log(posts);
  const manageMouseEnter = (e: any, index: number) => {
    gsap.to(e.target, {
      top: "-2vw",
      backgroundColor: posts[index].data.color,
      color: "white",
      duration: 0.3,
    });
  };

  const manageMouseLeave = (e: any) => {
    gsap.to(e.target, {
      top: "0",
      backgroundColor: "#09090b",
      duration: 0.3,
      color: "white",
      delay: 0.1,
    });
  };

  return (
    <div className="flex py-12 md:py-32">
      <div className="relative w-full">
        {posts.map((post: any, index: number) => {
          return (
            <a
              href={`/blog/${post.slug}/`}
              onMouseEnter={(e) => {
                manageMouseEnter(e, index);
              }}
              onMouseLeave={(e) => {
                manageMouseLeave(e);
              }}
              key={index}
              className="border-t text-white border-zinc-700 px-4 flex justify-between items-center gap-8 cursor-pointer relative -mb-[2vw] bg-zinc-950"
            >
              <p className="m-0 text-[5vw] uppercase pointer-events-none">
                {post.data.title}
              </p>
              <p className="text-zinc-500">
                {new Date(post.data.pubDate).toLocaleDateString()}
              </p>
            </a>
          );
        })}
      </div>
    </div>
  );
}

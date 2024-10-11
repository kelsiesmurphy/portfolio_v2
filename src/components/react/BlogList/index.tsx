import gsap from "gsap";

export default function BlogList({ posts }: any) {
  const manageMouseEnter = (e: any, index: number) => {
    gsap.to(e.target, {
      top: "-2.2vw",
      backgroundColor: posts[index].data.color,
      duration: 0.3,
    });
  };

  const manageMouseLeave = (e: any) => {
    gsap.to(e.target, {
      top: "0",
      backgroundColor: "",
      duration: 0.3,
      delay: 0.1,
    });
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(date);
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
              className="border-t-2 py-4 md:py-0 border-muted px-4 flex justify-between items-center gap-8 cursor-pointer relative -mb-[2.2vw] bg-background"
            >
              <p className="m-0 text-2xl md:text-[5vw] md:leading-[8vw] uppercase pointer-events-none">
                {post.data.title}
              </p>
              <p className="text-muted-foreground">
                {formatDate(post.data.pubDate)}
              </p>
            </a>
          );
        })}
      </div>
    </div>
  );
}

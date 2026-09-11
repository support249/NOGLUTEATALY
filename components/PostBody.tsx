import { parsePostBody } from "@/lib/post-body";

type PostBodyProps = {
  body: string;
};

export function PostBody({ body }: PostBodyProps) {
  const blocks = parsePostBody(body);

  return (
    <div className="post-body">
      {blocks.map((block, index) => {
        const key = `${block.type}-${index}`;

        if (block.type === "heading") {
          return <h2 key={key}>{block.text}</h2>;
        }

        if (block.type === "subheading") {
          return <h3 key={key}>{block.text}</h3>;
        }

        if (block.type === "list") {
          const className =
            block.style === "check"
              ? "checks post-list"
              : block.style === "cross"
                ? "crosses post-list"
                : "plain-list post-list";
          return (
            <ul key={key} className={className}>
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }

        return <p key={key}>{block.text}</p>;
      })}
    </div>
  );
}

import "@css/title";

export default function Title(
  {title}:{title: string}
) {
  return(
     <div className="title">
        <h2>
         {title}
        </h2>
     </div>
  );
};

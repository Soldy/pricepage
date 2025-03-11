import "@css/title";

export default function Title(
  {title}:{title: string}
): React.JSX.Element {
  return(
     <div className="title">
        <h2>
         {title}
        </h2>
     </div>
  );
};

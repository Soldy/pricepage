
import "@css/image";

export default function Images(
  {urls}: {urls:string[]}
): React.JSX.Element{
  let imgi = -1;
  let block_end = 0;
  let class_current = 0;
  const img_size = urls.length;
  const classes = [
    "imageOne",
    "imageTwo",
    "imageThree",
    "imageFour"
  ];
  function className():string{
    if( block_end != imgi ){
      return (
        'image '+
        classes[class_current-1]
       );
    }
    const left = img_size - imgi;
    for (let i = 4 ;i > 0; i--){
      class_current = i;
      if( left >= i ){
        break;
      }
    }
    block_end += class_current;
    return (
      'image '+
      classes[class_current-1]
    );
  };
  return(
    <div className="images">
      {urls.map((src) => {
        imgi++;
        return (
          <div
            key={imgi+1}
            className={className()}
            style={{
              backgroundImage:'url('+src+')'
            }}
          />
        );
      })}
    </div>
  );
};

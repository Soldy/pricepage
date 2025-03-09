
export default function Images(
  {urls}: {urls:string[]}
): JSX.Element{
  let imgi = -1;
  let img_size = urls.length;
  let block_end = 0;
  let class_current = 0;
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
      if( i >= left ){
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

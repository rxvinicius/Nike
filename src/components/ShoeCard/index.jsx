const ShoeCard = ({ imgUrl, changeBigShoeImg, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imgUrl) {
      changeBigShoeImg(imgUrl.bigShoe);
    }
  };

  return (
    <div
      className={`
      border-2 rounded-xl cursor-pointer max-sm:flex-1
      ${bigShoeImg === imgUrl ? "border-coral-red" : "border-transparent"}
    `}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center rounded-xl bg-card bg-center bg-cover sm:h-40">
        <img
          src={imgUrl.thumbnail}
          alt="shoe collection"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;

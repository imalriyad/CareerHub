/* eslint-disable react/prop-types */

const Category = ({ category }) => {

  return (
    <>
    <div className="bg-purple-50 p-7 rounded-md">
      <img src={category?.logo} alt="" className="bg-purple-200 p-2 rounded" />
      <h1 className="text-[#474747] pt-6 text-xl font-bold">
        {category?.category_name}
      </h1>
      <p className="text-[#747373] tracking-wider font-medium pt-2">
        {category?.availability}
      </p>
    </div>
    </>
  );
};

export default Category;

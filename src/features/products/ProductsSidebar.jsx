import Filter from "../../ui/Filter";

function ProductsSidebar() {
  return (
    <div className="basis-1/2">
      <div className="p-4">
        <h5 className="font-poppins font-semibold text-3xl mb-4">
          Filter by price
        </h5>
        <Filter
        filterField="price"
        options={[{value:'all',lable:"All"},{value:"300",lable:"Less than 300 $"},{value:'600',lable:"Less than 600 $"},{value:'900',lable:"Less than 900 $"}]}
        defaultChecked={false}
          />
      </div>
    </div>
  );
}

export default ProductsSidebar;

// import FormSelectFields, { ISelectFieldOptions } from "./FormSelectFields";


// const BuildingField = () => {
//   const { data, isLoading } = useBuildingsQuery({
//     limit: 100,
//     page: 1,
//   });
//   const buildings = data?.buildings;
//   const buildingsOptions = buildings?.map((building) => {
//     return {
//       label: building?.title,
//       value: building?.id,
//     };
//   });

//   return (
//     <FormSelectFields
//       name="building"
//       label="building"
//       options={buildingsOptions as ISelectFieldOptions[]}
//     />
//   );
// };

// export default BuildingField;

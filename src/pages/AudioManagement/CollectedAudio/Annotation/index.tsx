import { useContext, useEffect } from "react";
import { SearchBox } from "../../../../components/SearchBox";
import Table from "../../../../components/Table"
import { AudioManagementContext } from "../../../../context/AudioManagementProvider";

const Annotation = () => {

  const { getAnnotationData, annotationData } = useContext(AudioManagementContext)

  useEffect(()=> {
    getAnnotationData();
       // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div>
      <Header />
      <Table.Type19 data={annotationData} />
    </div>
  )
}

export default Annotation;

const Header = () => {
  return (
    <div className='ml-6 mr-4 mb-5 flex items-center justify-between'>
      <div>
        <h1 className='text-heading-6 font-semibold text-ct-blue-95 leading-6'>Assign Audio to Annotation Type</h1>
        <p className='text-small text-ct-blue-90-70% mt-1.5'>Assign Audio in types of Anntation</p>
      </div>
      <div>
        <SearchBox.Type1 inputWidth="w-44" placeholder="Search" bgColor="bg-blue-gray-A10" textColor="text-ct-blue-90-70%" />
      </div>
    </div>
  )
}
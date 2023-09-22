const storedAplication = () => {
  const storedAplication = localStorage.getItem("job-aplication");
  if (storedAplication) {
    return JSON.parse(storedAplication);
  }
  return [];
};

const saveToLocalStorage =(id)=>{
     const storedAplications = storedAplication()
     const isExist = storedAplications.find(jobID => jobID === id )
     if (!isExist) {
        storedAplications.push(id)
        localStorage.setItem('job-aplication',JSON.stringify(storedAplications))
     }
}

export { storedAplication,saveToLocalStorage };

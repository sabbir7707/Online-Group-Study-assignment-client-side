
const Container  = ({children}) => {
    return (
        <div className={`w-full max-w-[1300px] px-[25px] mx-auto mt-5 mb-5 `}>
      {children}
    </div>
    );
};

export default Container ;
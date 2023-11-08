

const Show_submitedpage = ({card}) => {
    const { pdf_link,  textarea } =  card
    return (
        <div>
              <h2> link: { pdf_link }</h2>
              <h2> link: {  textarea}</h2>
        </div>
    );
};

export default Show_submitedpage;
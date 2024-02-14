import Pagination from 'react-bootstrap/Pagination';

const ProductPagination = ({currentPage, totalData, dataPerPage, changePage}) => {
    const totalPage = Math.ceil(totalData/dataPerPage);
    const NextPage = () => {
        let i = 1;
        return Array(3).fill([]).map((v, k) => {
            let number = currentPage+i;
            if(number < totalPage){
                i++;
                return (
                    <Pagination.Item key={k} onClick={() => changePage(number)}>{number}</Pagination.Item>
                );
            }
        });
    }

    const PrevPage = () => {
        let prev = currentPage;
        let i = 0;
        return Array(3).fill([]).map((v, k) => {
            let number = prev-3+i;
            i++;
            if(number > 1){
                return (
                    <Pagination.Item key={k} onClick={() => changePage(number)}>{number}</Pagination.Item>
                );
            }
        });
    }
    return (
        <Pagination className='mt-3'>
            <Pagination.Prev disabled={currentPage == 1 ? true : false} onClick={() => changePage(currentPage-1)}/>
            <Pagination.Item hidden={currentPage==1 ? true : false} onClick={() => changePage(1)}>{1}</Pagination.Item>
            <Pagination.Ellipsis hidden={currentPage-1 > 1 ? false : true}/>
            
            <PrevPage/>
            <Pagination.Item active>{currentPage}</Pagination.Item>
            <NextPage/>

            <Pagination.Ellipsis hidden={currentPage < totalPage-1 ? false : true}/>
            <Pagination.Item hidden={currentPage == totalPage ? true : false} onClick={() => changePage(totalPage)}>{totalPage}</Pagination.Item>
            <Pagination.Next disabled={currentPage == totalPage ? true : false} onClick={() => changePage(currentPage+1)}/>
        </Pagination>
    );
}

export default ProductPagination;
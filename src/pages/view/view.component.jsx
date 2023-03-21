import './view.css';
import Spinner from '../../components/core/spinner/spinner.componenr';
import MenuItem from '../../components/view/menu-item/menu-item.component';
import FilterBar from '../../components/view/filter-bar/filter-bar.component';
import useGetItems from '../../hooks/get-items.hook';

const ViewPage = () => {
  const { loading, items } = useGetItems();

  return (
    <div className='view'>
      <h1 align='center'>View Menu Items</h1>
      <FilterBar />
      {loading
        ? <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Spinner />
        </div>
        : <div className='items'>
          {
            items.length
              ? items.map((item, index) => <div key={item.name + index}>
                <MenuItem item={item} />
              </div>)
              : <div className="img">
                <h5>No such item satisfies your requirements!</h5>
                <img src="./sad-crab.svg" alt="" />
              </div>
          }
        </div>
      }
    </div>
  );
};

export default ViewPage;
import { useState, useEffect } from 'react';
import { Card, Table } from 'antd';
import { DataStore } from 'aws-amplify';
import { Restaurant } from '../../models';
import { useRestaurantContext } from '../../context/RestaurantContext';

const OtherRestaurants = () => {

    const [other, setOthers] = useState([]);
    const { restaurant } = useRestaurantContext();

    useEffect(() => {
        
            DataStore.query(Restaurant, (c) =>
            c.id.ne(restaurant.id)).then(setOthers);
        
    }, [restaurant]);


    const tableColumns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Image Link',
            dataIndex: 'image',
            key: 'image',
            render: () => <a href={restaurant.image}>{restaurant.name}</a>
        },
    ];

    return (
        <Card title='Other Restaurants' style={styles.page}>
            <Table 
                dataSource={other}
                columns={tableColumns}
                rowKey='id'
            />
        </Card>
    );
};

const styles = {
    page: {
        margin: 20,
    },
}

export default OtherRestaurants;
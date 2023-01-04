import { Button, Image, Table } from 'antd'
import { useEffect, useState } from 'react'
import { UserIdentity } from '../../types/user'
import axios, { AxiosRequestConfig } from 'axios'
import type { ColumnsType } from 'antd/es/table'
import { DeleteOutlined, EditOutlined, MessageOutlined } from '@ant-design/icons'
import { v4 as uuidv4 } from 'uuid';
import '../Table/Table.scss'
import user from '../../assets/image/image-2.png'
import authAxios from '../../axios/Auth/instance';
const TableComponent = () => {
    const [dataSource, setDataSource] = useState<any>([])
    const [loading, setLoading] = useState<boolean>(false)
    useEffect(() => {
        fetchPosts();
    }, [])

    const fetchPosts = async () => {
        setLoading(true)
        const respone = await authAxios.get('/categories')
        setDataSource(respone.data.data.data.list)
        console.log(respone.data.data.data.list)
        // const list = respone.data
        respone.data.data.data.list.forEach((element: any) => {
            element.key = element.id;
        });
        // setDataSource(respone.data);
        setLoading(false)
    }


    const [columns, seColumns] = useState<ColumnsType<UserIdentity> | undefined>([
        {
            title: '',
            render: (record: string) => {
                return <>
                    <MessageOutlined style={{ fontSize: 18 }} />
                </>
            },
            align: 'center',
        },
        {
            title: 'Avatar',
            render: (record: string) => {
                return <>
                    <div className='user__avatar'>
                        <img src={user}></img>
                    </div>

                </>
            },

            align: 'center',
        },
        {
            title: 'Roles',
            dataIndex: 'metaTitle',
            align: 'center',
        },
        {
            title: 'Title',
            dataIndex: 'title',
            align: 'center',
        },
        {
            title: '',
            render: (record: string) => {
                return <>
                    <EditOutlined style={{ color: "blue", fontSize: 18 }} />
                    <DeleteOutlined style={{ color: "red", marginLeft: 20, fontSize: 18 }} />
                </>
            },
            align: 'center',
        },
    ])

    return (
        <Table columns={columns}
            dataSource={dataSource}
            pagination={{ showSizeChanger: false, pageSize: 5, onChange: (page) => { fetchPosts() } }}
            loading={loading} >

        </Table>
    )
}
export default TableComponent
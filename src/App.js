import { Layout, Menu } from "antd";
import { Content, Header } from "antd/lib/layout/layout";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import { PAGES } from "./constants";
import { fetchAllCurrencies, fetchExchangeRates } from "./store/asyncActions";
import styles from './styles/app.module.css'

function App() {
    const dispatch = useDispatch();
    const { pathname } = useLocation();

    useEffect(() => {
        dispatch(fetchAllCurrencies());
        dispatch(fetchExchangeRates());
    }, [dispatch]);

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Header>
                <Menu
                    items={PAGES}
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={pathname}
                />
            </Header>
            <Content className={styles.content}>
                <Outlet />
            </Content>
        </Layout>
    );
}

export default App;

import { Button, Result } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from './error.module.css';

function Error() {
    const navigate = useNavigate();

    return (
        <Result
            className={styles.error}
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist"
            extra={
                <Button onClick={() => navigate("/", { replace: true })} type="primary">
                    Back Home
                </Button>
            }
        />
    );
}

export default Error;

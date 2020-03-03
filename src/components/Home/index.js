import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Upload, Button, Icon, message, Typography } from 'antd';
import { DataContext } from '../../context';
import api from '../../api';

import { Container, animationVariants } from './styles';

function Home(props) {
  let history = useHistory();
  const setData = useContext(DataContext)[1];
  const [file, setFile] = useState([]);
  const [uploading, setUploading] = useState(false);

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('file', file);

    setUploading(true);

    // API Request
    api
      .post('/upload', formData)
      .then(res => {
        setData(res.data);
        setFile(null);
        setUploading(false);
        history.push('/summary');
      })
      .catch(() => {
        setUploading(false);
        message.error('Upload failed.');
      });
  };

  const onRemoveFile = file => {
    setFile(null);
  };

  const beforeUpload = (file) => {
    setFile(file);
    return false;
  };

  return (
    <Container
      key="home"
      initial="initial"
      animate="animate"
      exit="exit"
      positionTransition
      variants={animationVariants}
    >
      <Typography.Title>Darf Stock</Typography.Title>
      <Upload
        onRemove={onRemoveFile}
        beforeUpload={beforeUpload}
        file={file}
        accept=".xls"
      >
        <Button>
          <Icon type="upload" /> Select File
        </Button>
      </Upload>
      <Button
        type="primary"
        onClick={handleUpload}
        disabled={!file}
        loading={uploading}
        style={{ marginTop: 16 }}
      >
        {uploading ? 'Uploading' : 'Start Upload'}
      </Button>
    </Container>
  );
}

export default Home;

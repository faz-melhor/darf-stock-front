import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Upload, Button, Icon, message, Typography } from 'antd';
import { DataContext } from '../../context';
import api from '../../api';

import { Container, animationVariants } from './styles';

function Home(props) {
  let history = useHistory();
  const setData = useContext(DataContext)[1];
  const [fileList, setFileList] = useState([]);
  const [uploading, setUploading] = useState(false);

  const handleUpload = () => {
    const formData = new FormData();
    fileList.forEach(file => {
      formData.append('files[]', file);
    });

    setUploading(true);

    // API Request
    api
      .post('/upload', formData)
      .then(res => {
        setData(res.data);
        setFileList([]);
        setUploading(false);
        history.push('/summary');
      })
      .catch(() => {
        setUploading(false);
        message.error('Upload failed.');
      });
  };

  const onRemoveFile = file => {
    const index = fileList.indexOf(file);
    const newFileList = fileList.slice();
    newFileList.splice(index, 1);
    setFileList(newFileList);
  };

  const beforeUpload = (file, newFileList) => {
    setFileList([...fileList, ...newFileList]);
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
        fileList={fileList}
        multiple
      >
        <Button>
          <Icon type="upload" /> Select File
        </Button>
      </Upload>
      <Button
        type="primary"
        onClick={handleUpload}
        disabled={fileList.length === 0}
        loading={uploading}
        style={{ marginTop: 16 }}
      >
        {uploading ? 'Uploading' : 'Start Upload'}
      </Button>
    </Container>
  );
}

export default Home;

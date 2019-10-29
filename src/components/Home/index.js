import React, { useState, useContext } from 'react';
import { Upload, Button, Icon, message } from 'antd';
import { DataContext } from '../../context';
import api from '../../api';

import { Container } from './styles';

function Home({ history }) {
  const [data, setData] = useContext(DataContext);
  const [fileList, setFileList] = useState([]);
  const [uploading, setUploading] = useState(false);

  console.log('data', data);

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
    <Container>
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

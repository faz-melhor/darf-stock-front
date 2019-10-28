import React, { useState } from 'react';
import { Upload, Button, Icon, message } from 'antd';
import api from '../../api';

import { Container } from './styles';

function Home() {
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
      .post('/', formData)
      .then(res => {
        setFileList([]);
        setUploading(false);
        message.success('upload successfully.');
      })
      .catch(() => {
        setUploading(false);
        message.error('upload failed.');
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

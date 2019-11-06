import axios from 'axios';
import React, { useEffect, useState } from 'react';

import IFrame from './iframe';

const Code = ({ component }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [code, setCode] = useState(null);

  const Loader = () => (<div>Loading {component}.twig...</div>);

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      const output = await axios.get(`/api/ui/${component}`);
      setCode({__html: output.data});
      setIsLoading(false);
    })();
  }, []);

  return isLoading
    ? <Loader />
    : (
      <IFrame>
        <div dangerouslySetInnerHTML={code}></div>
      </IFrame>
    );
}
export default Code;

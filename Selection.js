import React, { useState } from 'react';
import { Form, Checkbox } from 'semantic-ui-react';
import Question from './Question';
import ArticleSection from './Article';

function Selection(props) {
  const [value, setValue] = useState(props.defaultValue || 'Question');

  return (
    <>
      <Form>        
        <Form.Field>
          Selected value: <b>{value}</b>
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label='Question'
            name='checkboxRadioGroup'
            value='Question'
            checked={value === 'Question'}
            onChange={(e, data) => setValue(data.value)}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label='Article'
            name='checkboxRadioGroup'
            value='Article'
            checked={value === 'Article'}
            onChange={(e, data) => setValue(data.value)}
          />
        </Form.Field>
      </Form>

      {value === 'Question' ? <Question /> : <ArticleSection />}
    </>
  );
}

export default Selection;

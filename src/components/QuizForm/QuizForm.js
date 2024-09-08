import { Formik, Field, Form } from 'formik';

export const QuizForm = () => {
  return (
    <Formik
      initialValues={{
        topic: '',
        time: '0',
        questions: '0',
        level: 'beginner',
      }}
      onSubmit={values => {
        console.log(values);
      }}
    >
      <Form>
        <label>
          Topic
          <Field name="topic" />
        </label>

        <label>
          Time
          <Field type="number" name="time" />
        </label>

        <label>
          Questions
          <Field type="number" name="questions" />
        </label>

              <label>
                  Level
          <Field as="select" name="level">
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </Field>
        </label>

        <button type="submit">Add quiz</button>
      </Form>
    </Formik>
  );
};

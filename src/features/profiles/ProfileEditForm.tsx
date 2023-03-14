import { Form, Formik } from "formik";
import { observer } from "mobx-react-lite";
import { Button } from "semantic-ui-react";
import * as Yup from "yup";
import MyTextInput from "../../app/common/form/MyTextInput";
import { useStore } from "../../app/stores/store";
import MyTextArea from "../activities/form/MyTextArea";
interface Props {
    setEditMode: (editMode: boolean) => void;
}

export default observer(function ProfileEditForm({ setEditMode }: Props) {
    const { profileStore: { profile, setUserInfor } } = useStore();

    const validationSchema = Yup.object({
        displayName: Yup.string().required("The activity title is required"),
        bio: Yup.string().notRequired(),
    })
    return (
        <Formik
            initialValues={{
                displayName: profile?.displayName, bio:
                    profile?.bio
            }}
            validationSchema={validationSchema}
            onSubmit={values => {
                setUserInfor(values).then(() => {
                    setEditMode(false);
                })
            }}
        >
            {({ isSubmitting, isValid, dirty }) => (
                <Form className='ui form'>
                    <MyTextInput placeholder='Display Name'
                        name='displayName' />
                    <MyTextArea row={3} placeholder='Add your bio'
                        name='bio' />
                    <Button
                        positive
                        type='submit'
                        loading={isSubmitting}
                        content='Update profile'
                        floated='right'
                        disabled={!isValid || !dirty}
                    />
                </Form>
            )}
        </Formik>
    )
})
import { Box, Button, TextField } from '@mui/material'
import { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 } from 'uuid'
import { Todo, addTodo } from '../redux/todoSlice'

type FormValue = {
    title: string
    description: string
}

const TodoForm: FC = (): JSX.Element => {
    const dispatch = useDispatch()
    const [values, setValues] = useState<FormValue>({
        title: '',
        description: ''
    })

    const onSubmit = (e: any) => {
        e.preventDefault()
        const payload: Todo = {
            ...values,
            id: v4()
        }
        dispatch(addTodo(payload))

        setValues({
            title: '',
            description: ''
        })
    }

    return (
        <Box>
            <form onSubmit={onSubmit}>
                <Box display="flex" flexDirection="column" alignItems="center" >
                    <TextField
                        label="Title"
                        variant="outlined"
                        value={values.title}
                        name='title'
                        onChange={(e) => {
                            setValues({
                                ...values,
                                [e.target.name]: e.target.value
                            })
                        }}
                        style={{ marginBottom: '15px', width: 340 }}
                    />

                    <TextField
                        label="Description"
                        variant="outlined"
                        value={values.description}
                        name='description'
                        multiline
                        rows={5}
                        onChange={(e) => {
                            setValues({
                                ...values,
                                [e.target.name]: e.target.value
                            })
                        }}
                        style={{ marginBottom: '15px', width: 340 }}
                    />

                    <Button variant="contained" type='submit' style={{ marginBottom: '15px', width: 100 }}>
                        Create
                    </Button>
                </Box>
            </form>
        </Box>
    )
}

export default TodoForm
import { render, screen } from '@testing-library/react';
import Login from '../Components/Login';

test('checking component Loading ', () => {
    render(<Login/>)
    expect(screen.queryAllByText(/Login/i)[0]).toBeInTheDocument();
    // expect(screen.getByText(/Login/i)).toBeInTheDocument();

})

test('checking input tag of email and password',()=>{
    render(<Login/>)
    expect(screen.queryByPlaceholderText('Enter the Gmail')).toHaveValue('');
    expect(screen.queryByPlaceholderText('Enter the password')).toHaveValue('')
})

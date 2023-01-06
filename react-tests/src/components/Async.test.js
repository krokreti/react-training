import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe('Async component', () => {

    test('renders posts', async () => {
        render(<Async/>)
        //find retorna uma promise
        const listItemElements = await screen.findAllByRole('listitem');
        expect(listItemElements).not.toHaveLength(0);
    });
})
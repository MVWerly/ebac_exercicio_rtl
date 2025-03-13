import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '..';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment />);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve adicionar 2 comentários', () => {
        const { debug } = render(<PostComment />);

        const BTN = screen.getByTestId('btn-submit-comment');
        const COMMENT_FIELD = screen.getByTestId('comment-field');

        fireEvent.change(COMMENT_FIELD, {
            target: {
                value: 'um comentário'
            }
        });
        fireEvent.click(BTN)
        debug()
        expect(screen.getByText('um comentário')).toBeInTheDocument()

        fireEvent.change(COMMENT_FIELD, {
            target: {
                value: 'um novo comentário'
            }
        });
        fireEvent.click(BTN)
        debug()
        expect(screen.getByText('um novo comentário')).toBeInTheDocument()
    });
});
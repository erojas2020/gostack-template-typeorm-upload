import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';

// import Transaction from '../models/Transaction';
import TransactionsRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionsRepository = getCustomRepository(TransactionsRepository);

    const checkId = transactionsRepository.findOne(id);

    if (!checkId) {
      throw new AppError('Transaction does not exist');
    }

    await transactionsRepository.delete(id);
  }
}

export default DeleteTransactionService;

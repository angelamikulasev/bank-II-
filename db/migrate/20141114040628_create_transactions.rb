class CreateTransactions < ActiveRecord::Migration
  def change
    create_table :transactions do |t|
    	t.string :memo
    	t.string :type
    	t.integer :amount
    	t.integer :account_id
    	t.timestamps
    end
  end
end

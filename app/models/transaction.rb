# == Schema Information
#
# Table name: transactions
#
#  id         :integer          not null, primary key
#  memo       :string(255)
#  type       :string(255)
#  amount     :integer
#  account_id :integer
#  created_at :datetime
#  updated_at :datetime
#

class Transaction < ActiveRecord::Base
	belongs_to :account
end

require 'rails_helper'

describe User do
  describe '#password_hash' do
    let(:user) { FactoryGirl.build(:user, password: 'randompassword') }

    it 'is set when password is assigned' do
      expect(user.password_hash).to be_present
    end
  end

  describe '#authenticate' do
    let(:email) { 'lauren@lauren.com' }
    let(:password) { 'sometest123' }
    let!(:user) { FactoryGirl.build :user, email: email, password: password }

    context 'when credentials match' do
      it 'return user' do
        user.save!

        expect(User.authenticate(email, password)).to be_present
      end
    end

    context 'when credentials are incorrect' do
      it 'returns no user' do
        user = User.authenticate email, 'blah'

        expect(user).to be_nil
      end
    end
  end
end

 # rspec spec/models/user_spec.rb  --format documentation
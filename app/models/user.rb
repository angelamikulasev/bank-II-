class User < ActiveRecord::Base
  include BCrypt

  def password
    @password
  end

  def password=(password)
    @password = password

    self.password_hash = Password.create password
  end

  def self.authenticate(email, password) # plain text password passed in here
    user = User.where(email: email).first

    return nil if user.nil?

    # hash the plaintext password and then compare that to user.password_hash
    # if they match return the user and if it doesnt return nil
  end

	has_many :accounts

	validates :name, :presence => true
	validates :password, length: { in: 4..20 }
end

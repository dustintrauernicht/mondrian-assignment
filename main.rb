require "sinatra"
require "pry"

get "/" do
	erb :homepage
end

get "/save" do
	sentstring = params["saved"]
	saveLine = sentstring.chomp
	open("files.txt", "a") { |file|
		str = ""
		str << saveLine
		str << "\n"

		file << str
	}
end
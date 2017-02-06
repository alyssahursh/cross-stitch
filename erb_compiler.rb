require 'erb'

template = File.read("index.html.erb")

renderer = ERB.new(template)

File.open('index.html', 'w') do |f|
  f.write renderer.result
end

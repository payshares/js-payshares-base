require 'bundler'
Bundler.setup()

namespace :xdr do

  # As payshares-core adds more .x files, we'll need to update this array
  # Prior to launch, we should be separating our .x files into a separate
  # repo, and should be able to improve this integration.
  HAYASHI_XDR = [
                 "src/xdr/Payshares-types.x",
                 "src/xdr/Payshares-ledger-entries.x",
                 "src/xdr/Payshares-transaction.x",
                 "src/xdr/Payshares-ledger.x",
                 "src/xdr/Payshares-overlay.x",
                 "src/xdr/Payshares-SCP.x",
                ]

  task :update => [:download, :generate]

  task :download do
    require 'octokit'
    require 'base64'
    require 'fileutils'
    FileUtils.rm_rf "xdr"
    FileUtils.mkdir_p "xdr"

    client = Octokit::Client.new(:netrc => true)

    HAYASHI_XDR.each do |src|
      local_path = "xdr/" + File.basename(src)
      encoded    = client.contents("payshares/payshares-core", path: src).content
      decoded    = Base64.decode64 encoded

      IO.write(local_path, decoded)
    end
  end

  task :generate do
    require "pathname"
    require "xdrgen"

    paths = Pathname.glob("xdr/**/*.x")
    compilation = Xdrgen::Compilation.new(
      paths,
      output_dir: "src/generated",
      namespace:  "payshares-xdr",
      language:   :javascript
    )
    compilation.compile
  end
end

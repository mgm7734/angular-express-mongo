# -*- mode: ruby -*-

class Vg < Thor

  desc 'docker-host CMD', 'Run vagrant CMD DOCKER_HOST_ID'
  def docker_host(cmd)
    id,_ = `vagrant global-status`.match(/^(\S+)\s+dockerhost/).captures
    c = "vagrant #{ cmd } #{ id }"
    puts c
    system c
  end
end


# -*- mode: ruby -*-
# vi: set ft=ruby :

ENV['VAGRANT_DEFAULT_PROVIDER'] = 'docker'

class U
  def initialize(config)
    @config = config
  end
  
  def def_container(name, _=nil)
    @config.vm.define name do |n|
      n.vm.provider 'docker' do |d|
        d.name = name
        d.vagrant_machine = "dockerhost"
        d.vagrant_vagrantfile = "./DockerHostVagrantfile"
        yield(d)
      end
    end
  end
end

Vagrant.configure(2) do |config|
  u = U.new(config)
  
  u.def_container'db' do |d|
    d.image = 'mongo:2.6'
  end

  u.def_container 'web' do |d|
    d.build_dir = 'angular-fullstack'
    d.build_args = ['-t=fullstack-angular']

    d.ports = ['9000:9000']
    d.link  'db:db'
  end
    
end

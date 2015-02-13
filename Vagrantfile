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

  u.def_container 'app' do |d|
    d.build_dir = 'angular-fullstack'
    d.build_args = ['-t=fullstack-angular']

    d.volumes = ["/vagrant/angular-fullstack:/usr/src/app"]
    d.ports = ['9000:9000']
    d.link  'db:db'
  end

=begin
  u.def_container 'app' do |d|
    d.image = 'dockerfile/nodejs-bower-grunt'
    d.link 'db:db'
    d.cmd = ['bash']
    d.remains_running = false
  end
=end
  
  # config.vm.synced_folder ".", "/vagrant"
  # config.vm.synced_folder ".", "/usr/local/src"
=begin
  config.vm.define "app" do |app|
    app.vm.provider "docker" do |d|
      d.build_dir = "app"
      d.name='app'
      d.build_args = ['-t=app-i']
      d.ports = ["8080:8080"]
      d.volumes = ["/vagrant/app:/usr/local/src/app"]
      d.remains_running = false
      d.vagrant_machine = "dockerhost"
      d.vagrant_vagrantfile = "./DockerHostVagrantfile"
    end
  end
=end

end

# -*- mode: ruby -*-

class Dh < Thor

  desc 'vag CMD [ARGS...]', 'Run: vagrant CMD DOCKER_HOST_ID ARGS..'
  def vag(cmd, *args)
    id,_ = `vagrant global-status`.match(/^(\S+)\s+dockerhost/).captures
    c = "vagrant #{ cmd } #{ id } #{ args.join(' ') }"
    puts c
    system c
  end

  desc 'webdev', 'launch a shell in a web container'
  def webdev
    # vag('ssh', '-c /vagrant/angular-fullstack/dev-container.sh')
    vag('ssh', '-c "docker run --rm -it \
                               -v /vagrant/angular-fullstack:/usr/src/app \
                               -p 9000:9000 \
                               --link db:db \
                               fullstack-angular bash"')
  end

  desc 'halt', 'stop dockerhost'
  def halt
    vag('halt')
  end
end


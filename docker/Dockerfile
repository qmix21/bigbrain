FROM centos:7

LABEL author="Johnathan Tiong <jt@hostopia.com.au>"

RUN rpm -Uvh https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
RUN rpm -Uvh https://centos7.iuscommunity.org/ius-release.rpm
RUN yum-config-manager --enable ius-archive

RUN yum -y install curl wget unzip git vim \
    iproute python-setuptools hostname inotify-tools yum-utils which \
    epel-release openssh-server openssh-clients

RUN yum install -y memcached libmemcached

# Install Python and Supervisor
RUN yum -y install python-setuptools \
    && mkdir -p /var/log/supervisor \
    && easy_install supervisor

# Install Apache & EXIM
RUN yum -y install httpd mod_ssl exim

# installing php 7.0
RUN yum install -y yum-plugin-replace
RUN yum install -y php72u-common php72u-cli \
        php72u-bcmath \
        php72u-mcrypt \
        php72u-ioncube-loader \
        php72u-imap \
        php72u-xml \
        php72u-mysqlnd \
        php72u-common \
        mod_php72u \
        php72u-gmp \
        php72u-json \
        php72u-gd \
        php72u-xmlrpc \
        php72u-mbstring \
        php72u-pear \
        php72u-pecl-memcached \
        php72u-devel \
        php72u-pdo \
        php72u-soap \
        php72u-process \
        php72u-pecl-igbinary \
        php72u-opcache \
        php72u-devel \
        zlib-devel \
        curl-devel \
        gcc

RUN yum install -y mod_php72u mod_ssl
RUN yum install -y libyaml-devel
RUN yum clean all


RUN chown apache:apache /var/www/html
RUN chmod g+s /var/www/html
RUN echo "IncludeOptional sites-enabled/*.conf" >> /etc/httpd/conf/httpd.conf

COPY vhost.conf /etc/httpd/sites-enabled/whmcs.conf
COPY php.ini /etc/php.ini

RUN curl -sS https://getcomposer.org/installer | php && mv composer.phar /usr/local/bin/composer
RUN usermod -u 1000 apache && ln -sf /dev/stdout /var/log/httpd/access_log && ln -sf /dev/stderr /var/log/httpd/error_log
RUN unlink /etc/localtime && ln -s /usr/share/zoneinfo/Australia/Sydney /etc/localtime

COPY supervisord.conf /etc/supervisord.conf

EXPOSE 80

# CMD ["/usr/sbin/httpd", "-DFOREGROUND"]
CMD ["/usr/bin/supervisord"]

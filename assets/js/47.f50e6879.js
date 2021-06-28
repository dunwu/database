(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{437:function(v,_,e){"use strict";e.r(_);var r=e(15),s=Object(r.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"redis-持久化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis-持久化"}},[v._v("#")]),v._v(" Redis 持久化")]),v._v(" "),e("blockquote",[e("p",[v._v("Redis 支持持久化，即把数据存储到硬盘中。")]),v._v(" "),e("p",[v._v("Redis 提供了两种持久化方式：")]),v._v(" "),e("ul",[e("li",[e("strong",[e("code",[v._v("RDB 快照（snapshot）")])]),v._v(" - 将存在于某一时刻的所有数据都写入到硬盘中。")]),v._v(" "),e("li",[e("strong",[e("code",[v._v("只追加文件（append-only file，AOF）")])]),v._v(" - 它会在执行写命令时，将被执行的写命令复制到硬盘中。")])]),v._v(" "),e("p",[v._v("这两种持久化方式既可以同时使用，也可以单独使用。")]),v._v(" "),e("p",[v._v("将内存中的数据存储到硬盘的一个主要原因是为了在之后重用数据，或者是为了防止系统故障而将数据备份到一个远程位置。另外，存储在 Redis 里面的数据有可能是经过长时间计算得出的，或者有程序正在使用 Redis 存储的数据进行计算，所以用户会希望自己可以将这些数据存储起来以便之后使用，这样就不必重新计算了。")]),v._v(" "),e("p",[v._v("Redis 提供了两种持久方式：RDB 和 AOF。你可以同时开启两种持久化方式。在这种情况下, 当 redis 重启的时候会优先载入 AOF 文件来恢复原始的数据，因为在通常情况下 AOF 文件保存的数据集要比 RDB 文件保存的数据集要完整。")])]),v._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#%E4%B8%80rdb"}},[v._v("一、RDB")]),v._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#rdb-%E7%AE%80%E4%BB%8B"}},[v._v("RDB 简介")])]),v._v(" "),e("li",[e("a",{attrs:{href:"#rdb-%E7%9A%84%E5%88%9B%E5%BB%BA"}},[v._v("RDB 的创建")])]),v._v(" "),e("li",[e("a",{attrs:{href:"#rdb-%E7%9A%84%E8%BD%BD%E5%85%A5"}},[v._v("RDB 的载入")])]),v._v(" "),e("li",[e("a",{attrs:{href:"#rdb-%E7%9A%84%E6%96%87%E4%BB%B6%E7%BB%93%E6%9E%84"}},[v._v("RDB 的文件结构")])]),v._v(" "),e("li",[e("a",{attrs:{href:"#rdb-%E7%9A%84%E9%85%8D%E7%BD%AE"}},[v._v("RDB 的配置")])])])]),v._v(" "),e("li",[e("a",{attrs:{href:"#%E4%BA%8Caof"}},[v._v("二、AOF")]),v._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#aof-%E7%AE%80%E4%BB%8B"}},[v._v("AOF 简介")])]),v._v(" "),e("li",[e("a",{attrs:{href:"#aof-%E7%9A%84%E5%88%9B%E5%BB%BA"}},[v._v("AOF 的创建")])]),v._v(" "),e("li",[e("a",{attrs:{href:"#aof-%E7%9A%84%E8%BD%BD%E5%85%A5"}},[v._v("AOF 的载入")])]),v._v(" "),e("li",[e("a",{attrs:{href:"#aof-%E7%9A%84%E9%87%8D%E5%86%99"}},[v._v("AOF 的重写")])]),v._v(" "),e("li",[e("a",{attrs:{href:"#aof-%E7%9A%84%E9%85%8D%E7%BD%AE"}},[v._v("AOF 的配置")])])])]),v._v(" "),e("li",[e("a",{attrs:{href:"#%E4%B8%89rdb-%E5%92%8C-aof"}},[v._v("三、RDB 和 AOF")]),v._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#%E5%A6%82%E4%BD%95%E9%80%89%E6%8B%A9%E6%8C%81%E4%B9%85%E5%8C%96"}},[v._v("如何选择持久化")])]),v._v(" "),e("li",[e("a",{attrs:{href:"#rdb-%E5%88%87%E6%8D%A2%E4%B8%BA-aof"}},[v._v("RDB 切换为 AOF")])]),v._v(" "),e("li",[e("a",{attrs:{href:"#aof-%E5%92%8C-rdb-%E7%9A%84%E7%9B%B8%E4%BA%92%E4%BD%9C%E7%94%A8"}},[v._v("AOF 和 RDB 的相互作用")])])])]),v._v(" "),e("li",[e("a",{attrs:{href:"#%E5%9B%9Bredis-%E5%A4%87%E4%BB%BD"}},[v._v("四、Redis 备份")]),v._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#%E5%A4%87%E4%BB%BD%E8%BF%87%E7%A8%8B"}},[v._v("备份过程")])]),v._v(" "),e("li",[e("a",{attrs:{href:"#%E5%AE%B9%E7%81%BE%E5%A4%87%E4%BB%BD"}},[v._v("容灾备份")])])])]),v._v(" "),e("li",[e("a",{attrs:{href:"#%E4%BA%94%E8%A6%81%E7%82%B9%E6%80%BB%E7%BB%93"}},[v._v("五、要点总结")])]),v._v(" "),e("li",[e("a",{attrs:{href:"#%E5%8F%82%E8%80%83%E8%B5%84%E6%96%99"}},[v._v("参考资料")])])]),v._v(" "),e("h2",{attrs:{id:"一、rdb"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、rdb"}},[v._v("#")]),v._v(" 一、RDB")]),v._v(" "),e("h3",{attrs:{id:"rdb-简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rdb-简介"}},[v._v("#")]),v._v(" RDB 简介")]),v._v(" "),e("p",[e("strong",[v._v("RDB 即快照方式，它将某个时间点的所有 Redis 数据保存到一个经过压缩的二进制文件（RDB 文件）中")]),v._v("。")]),v._v(" "),e("p",[v._v("创建 RDB 后，用户可以对 RDB 进行"),e("strong",[v._v("备份")]),v._v("，可以将 RDB "),e("strong",[v._v("复制")]),v._v("到其他服务器从而创建具有相同数据的服务器副本，还可以在"),e("strong",[v._v("重启")]),v._v("服务器时使用。一句话来说：RDB 适合作为 "),e("strong",[v._v("冷备")]),v._v("。")]),v._v(" "),e("p",[v._v("RDB 既可以手动执行，也可以根据服务器配置选项定期执行。该功能可以将某个时间点的数据库状态保存到一个 RDB 文件中。")]),v._v(" "),e("h4",{attrs:{id:"rdb-的优点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rdb-的优点"}},[v._v("#")]),v._v(" RDB 的优点")]),v._v(" "),e("ul",[e("li",[v._v("RDB 文件非常紧凑，"),e("strong",[v._v("适合作为冷备")]),v._v("。比如你可以在每个小时报保存一下过去 24 小时内的数据，同时每天保存过去 30 天的数据，这样即使出了问题你也可以根据需求恢复到不同版本的数据集。")]),v._v(" "),e("li",[v._v("快照在保存 RDB 文件时父进程唯一需要做的就是 fork 出一个子进程，接下来的工作全部由子进程来做，父进程不需要再做其他 IO 操作，所以快照持久化方式可以最大化 Redis 的性能。")]),v._v(" "),e("li",[e("strong",[v._v("恢复大数据集时，RDB 比 AOF 更快")]),v._v("。")])]),v._v(" "),e("h4",{attrs:{id:"rdb-的缺点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rdb-的缺点"}},[v._v("#")]),v._v(" RDB 的缺点")]),v._v(" "),e("ul",[e("li",[e("strong",[v._v("如果系统发生故障，将会丢失最后一次创建快照之后的数据")]),v._v("。如果你希望在 Redis 意外停止工作（例如电源中断）的情况下丢失的数据最少的话，那么 快照不适合你。虽然你可以配置不同的 save 时间点(例如每隔 5 分钟并且对数据集有 100 个写的操作)，是 Redis 要完整的保存整个数据集是一个比较繁重的工作，你通常会每隔 5 分钟或者更久做一次完整的保存，万一在 Redis 意外宕机，你可能会丢失几分钟的数据。")]),v._v(" "),e("li",[e("strong",[v._v("如果数据量很大，保存快照的时间会很长")]),v._v("。快照需要经常 fork 子进程来保存数据集到硬盘上。当数据集比较大的时候，fork 的过程是非常耗时的，可能会导致 Redis 在一些毫秒级内不能响应客户端的请求。如果数据集巨大并且 CPU 性能不是很好的情况下，这种情况会持续 1 秒。AOF 也需要 fork，但是你可以调节重写日志文件的频率来提高数据集的耐久度。")])]),v._v(" "),e("h3",{attrs:{id:"rdb-的创建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rdb-的创建"}},[v._v("#")]),v._v(" RDB 的创建")]),v._v(" "),e("p",[v._v("有两个 Redis 命令可以用于生成 RDB 文件："),e("code",[v._v("SAVE")]),v._v(" 和 "),e("code",[v._v("BGSAVE")]),v._v("。")]),v._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://redis.io/commands/save",target:"_blank",rel:"noopener noreferrer"}},[e("strong",[e("code",[v._v("SAVE")])]),e("OutboundLink")],1),v._v(" 命令会阻塞 Redis 服务器进程，直到 RDB 创建完成为止，在阻塞期间，服务器不能响应任何命令请求。")]),v._v(" "),e("li",[e("a",{attrs:{href:"https://redis.io/commands/bgsave",target:"_blank",rel:"noopener noreferrer"}},[e("strong",[e("code",[v._v("BGSAVE")])]),e("OutboundLink")],1),v._v(" 命令会派生出（fork）一个子进程，然后由子进程负责创建 RDB 文件，服务器进程（父进程）继续处理命令请求。")])]),v._v(" "),e("blockquote",[e("p",[v._v("🔔 注意："),e("code",[v._v("BGSAVE")]),v._v(" 命令执行期间，"),e("code",[v._v("SAVE")]),v._v("、"),e("code",[v._v("BGSAVE")]),v._v("、"),e("code",[v._v("BGREWRITEAOF")]),v._v(" 三个命令会被拒绝，以免与当前的 "),e("code",[v._v("BGSAVE")]),v._v(" 操作产生竞态条件，降低性能。")])]),v._v(" "),e("h4",{attrs:{id:"自动间隔保存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自动间隔保存"}},[v._v("#")]),v._v(" 自动间隔保存")]),v._v(" "),e("p",[v._v("Redis 允许用户通过设置服务器配置的 "),e("code",[v._v("save")]),v._v(" 选项，让服务器每隔一段时间自动执行一次 "),e("code",[v._v("BGSAVE")]),v._v(" 命令。")]),v._v(" "),e("p",[v._v("用户可以通过 "),e("code",[v._v("save")]),v._v(" 选项设置多个保存条件，但只要其中任意一个条件被满足，服务器就会执行 "),e("code",[v._v("BGSAVE")]),v._v(" 命令。")]),v._v(" "),e("p",[v._v("举例来说，"),e("code",[v._v("redis.conf")]),v._v(" 中设置了如下配置：")]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v("save 900 1       -- 900 秒内，至少对数据库进行了 1 次修改\nsave 300 10      -- 300 秒内，至少对数据库进行了 10 次修改\nsave 60 10000    -- 60 秒内，至少对数据库进行了 10000 次修改\n")])])]),e("p",[v._v("只要满足以上任意条件，Redis 服务就会执行 BGSAVE 命令。")]),v._v(" "),e("h3",{attrs:{id:"rdb-的载入"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rdb-的载入"}},[v._v("#")]),v._v(" RDB 的载入")]),v._v(" "),e("p",[e("strong",[v._v("RDB 文件的载入工作是在服务器启动时自动执行的")]),v._v("，Redis 并没有专门用于载入 RDB 文件的命令。")]),v._v(" "),e("p",[v._v("服务器载入 RDB 文件期间，会一直处于阻塞状态，直到载入完成为止。")]),v._v(" "),e("blockquote",[e("p",[v._v("🔔 注意：因为 AOF 通常更新频率比 RDB 高，所以丢失数据相对更少。基于这个原因，Redis 有以下默认行为：")]),v._v(" "),e("ul",[e("li",[v._v("只有在关闭 AOF 功能的情况下，才会使用 RDB 还原数据，否则优先使用 AOF 文件来还原数据。")])])]),v._v(" "),e("h3",{attrs:{id:"rdb-的文件结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rdb-的文件结构"}},[v._v("#")]),v._v(" RDB 的文件结构")]),v._v(" "),e("p",[v._v("RDB 文件是一个经过压缩的二进制文件，由多个部分组成。")]),v._v(" "),e("p",[v._v("对于不同类型（STRING、HASH、LIST、SET、SORTED SET）的键值对，RDB 文件会使用不同的方式来保存它们。")]),v._v(" "),e("p",[e("img",{attrs:{src:"https://raw.githubusercontent.com/dunwu/images/dev/cs/database/redis/redis-rdb-structure.png",alt:"img"}})]),v._v(" "),e("p",[v._v("Redis 本身提供了一个 RDB 文件检查工具 redis-check-dump。")]),v._v(" "),e("h3",{attrs:{id:"rdb-的配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rdb-的配置"}},[v._v("#")]),v._v(" RDB 的配置")]),v._v(" "),e("p",[v._v("Redis RDB 默认配置如下：")]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v("save 900 1\nsave 300 10\nsave 60 10000\nstop-writes-on-bgsave-error yes\nrdbcompression yes\nrdbchecksum yes\ndbfilename dump.rdb\ndir ./\n")])])]),e("p",[v._v("Redis 的配置文件 "),e("code",[v._v("redis.conf")]),v._v(" 中与 RDB 有关的选项：")]),v._v(" "),e("ul",[e("li",[e("p",[e("code",[v._v("save")]),v._v(" - Redis 会根据 "),e("code",[v._v("save")]),v._v(" 选项，让服务器每隔一段时间自动执行一次 "),e("code",[v._v("BGSAVE")]),v._v(" 命令。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("stop-writes-on-bgsave-error")]),v._v(" - 当 BGSAVE 命令出现错误时停止写 RDB 文件")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("rdbcompression")]),v._v(" - RDB 文件开启压缩功能。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("rdbchecksum")]),v._v(" - 对 RDB 文件进行校验。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("dbfilename")]),v._v(" - RDB 文件名。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("dir")]),v._v(" - RDB 文件和 AOF 文件的存储路径。")])])]),v._v(" "),e("h2",{attrs:{id:"二、aof"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、aof"}},[v._v("#")]),v._v(" 二、AOF")]),v._v(" "),e("h3",{attrs:{id:"aof-简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aof-简介"}},[v._v("#")]),v._v(" AOF 简介")]),v._v(" "),e("p",[e("code",[v._v("AOF(Append Only File)")]),v._v(" 是以 "),e("strong",[v._v("文本日志形式")]),v._v(" 将 "),e("strong",[v._v("所有写命令以 Redis 命令请求协议格式追加到 AOF 文件的末尾")]),v._v("，以此来记录数据的变化。"),e("strong",[v._v("当服务器重启时，会重新载入和执行 AOF 文件中的命令，就可以恢复原始的数据")]),v._v("。AOF 适合作为 "),e("strong",[v._v("热备")]),v._v("。")]),v._v(" "),e("p",[v._v("AOF 可以通过 "),e("code",[v._v("appendonly yes")]),v._v(" 配置选项来开启。")]),v._v(" "),e("p",[v._v("命令请求会先保存到 AOF 缓冲区中，之后再定期写入并同步到 AOF 文件。")]),v._v(" "),e("h4",{attrs:{id:"aof-的优点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aof-的优点"}},[v._v("#")]),v._v(" AOF 的优点")]),v._v(" "),e("ul",[e("li",[e("strong",[v._v("如果系统发生故障，AOF 丢失数据比 RDB 少")]),v._v("。你可以使用不同的 fsync 策略：无 fsync；每秒 fsync；每次写的时候 fsync。使用默认的每秒 fsync 策略，Redis 的性能依然很好(fsync 是由后台线程进行处理的,主线程会尽力处理客户端请求)，一旦出现故障，你最多丢失 1 秒的数据。")]),v._v(" "),e("li",[e("strong",[v._v("AOF 文件可修复")]),v._v(" - AOF 文件是一个只进行追加的日志文件，所以不需要写入 seek，即使由于某些原因(磁盘空间已满，写的过程中宕机等等)未执行完整的写入命令，你也也可使用 redis-check-aof 工具修复这些问题。")]),v._v(" "),e("li",[e("strong",[v._v("AOF 文件可压缩")]),v._v("。Redis 可以在 AOF 文件体积变得过大时，自动地在后台对 AOF 进行重写：重写后的新 AOF 文件包含了恢复当前数据集所需的最小命令集合。整个重写操作是绝对安全的，因为 Redis 在创建新 AOF 文件的过程中，会继续将命令追加到现有的 AOF 文件里面，即使重写过程中发生停机，现有的 AOF 文件也不会丢失。而一旦新 AOF 文件创建完毕，Redis 就会从旧 AOF 文件切换到新 AOF 文件，并开始对新 AOF 文件进行追加操作。")]),v._v(" "),e("li",[e("strong",[v._v("AOF 文件可读")]),v._v(" - AOF 文件有序地保存了对数据库执行的所有写入操作，这些写入操作以 Redis 命令的格式保存。因此 AOF 文件的内容非常容易被人读懂，对文件进行分析（parse）也很轻松。 导出（export） AOF 文件也非常简单。举个例子，如果你不小心执行了 FLUSHALL 命令，但只要 AOF 文件未被重写，那么只要停止服务器，移除 AOF 文件末尾的 FLUSHALL 命令，并重启 Redis ，就可以将数据集恢复到 FLUSHALL 执行之前的状态。")])]),v._v(" "),e("h4",{attrs:{id:"aof-的缺点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aof-的缺点"}},[v._v("#")]),v._v(" AOF 的缺点")]),v._v(" "),e("ul",[e("li",[e("strong",[v._v("AOF 文件体积一般比 RDB 大")]),v._v(" - 对于相同的数据集来说，AOF 文件的体积通常要大于 RDB 文件的体积。")]),v._v(" "),e("li",[e("strong",[v._v("恢复大数据集时，AOF 比 RDB 慢。")]),v._v(" - 根据所使用的 fsync 策略，AOF 的速度可能会慢于快照。在一般情况下，每秒 fsync 的性能依然非常高，而关闭 fsync 可以让 AOF 的速度和快照一样快，即使在高负荷之下也是如此。不过在处理巨大的写入载入时，快照可以提供更有保证的最大延迟时间（latency）。")])]),v._v(" "),e("h3",{attrs:{id:"aof-的创建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aof-的创建"}},[v._v("#")]),v._v(" AOF 的创建")]),v._v(" "),e("p",[e("strong",[v._v("Redis 命令请求会先保存到 AOF 缓冲区，再定期写入并同步到 AOF 文件")]),v._v("。")]),v._v(" "),e("p",[v._v("AOF 的实现可以分为命令追加（append）、文件写入、文件同步（sync）三个步骤。")]),v._v(" "),e("ul",[e("li",[e("strong",[v._v("命令追加")]),v._v(" - 当 Redis 服务器开启 AOF 功能时，服务器在执行完一个写命令后，会以 Redis 命令协议格式将被执行的写命令追加到 AOF 缓冲区的末尾。")]),v._v(" "),e("li",[e("strong",[v._v("文件写入")]),v._v("和"),e("strong",[v._v("文件同步")]),v._v(" - Redis 的服务器进程就是一个事件循环，这个循环中的文件事件负责接收客户端的命令请求，以及向客户端发送命令回复。而时间事件则负责执行定时运行的函数。因为服务器在处理文件事件时可能会执行写命令，这些写命令会被追加到 AOF 缓冲区，服务器每次结束事件循环前，都会根据 "),e("code",[v._v("appendfsync")]),v._v(" 选项来判断 AOF 缓冲区内容是否需要写入和同步到 AOF 文件中。")])]),v._v(" "),e("p",[e("code",[v._v("appendfsync")]),v._v(" 不同选项决定了不同的持久化行为：")]),v._v(" "),e("ul",[e("li",[e("strong",[e("code",[v._v("always")])]),v._v(" - 将缓冲区所有内容写入并同步到 AOF 文件。")]),v._v(" "),e("li",[e("strong",[e("code",[v._v("everysec")])]),v._v(" - 将缓冲区所有内容写入到 AOF 文件，如果上次同步 AOF 文件的时间距离现在超过一秒钟，那么再次对 AOF 文件进行同步，这个同步操作是有一个线程专门负责执行的。")]),v._v(" "),e("li",[e("strong",[e("code",[v._v("no")])]),v._v(" - 将缓冲区所有内容写入到 AOF 文件，但并不对 AOF 文件进行同步，何时同步由操作系统决定。")])]),v._v(" "),e("h3",{attrs:{id:"aof-的载入"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aof-的载入"}},[v._v("#")]),v._v(" AOF 的载入")]),v._v(" "),e("p",[v._v("因为 AOF 文件中包含了重建数据库所需的所有写命令，所以服务器只要载入并执行一遍 AOF 文件中保存的写命令，就可以还原服务器关闭前的数据库状态。")]),v._v(" "),e("p",[v._v("AOF 载入过程如下：")]),v._v(" "),e("ol",[e("li",[v._v("服务器启动载入程序。")]),v._v(" "),e("li",[v._v("创建一个伪客户端。因为 Redis 命令只能在客户端上下文中执行，所以需要创建一个伪客户端来载入、执行 AOF 文件中记录的命令。")]),v._v(" "),e("li",[v._v("从 AOF 文件中分析并读取一条写命令。")]),v._v(" "),e("li",[v._v("使用伪客户端执行写命令。")]),v._v(" "),e("li",[v._v("循环执行步骤 3、4，直到所有写命令都被处理完毕为止。")]),v._v(" "),e("li",[v._v("载入完毕。")])]),v._v(" "),e("div",{attrs:{align:"center"}},[e("img",{attrs:{src:"https://raw.githubusercontent.com/dunwu/images/dev/cs/database/redis/redis-aof-flow.png"}})]),v._v(" "),e("h3",{attrs:{id:"aof-的重写"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aof-的重写"}},[v._v("#")]),v._v(" AOF 的重写")]),v._v(" "),e("p",[v._v("随着 Redis 不断运行，AOF 的体积也会不断增长，这将导致两个问题：")]),v._v(" "),e("ul",[e("li",[v._v("AOF 耗尽磁盘可用空间。")]),v._v(" "),e("li",[v._v("Redis 重启后需要执行 AOF 文件记录的所有写命令来还原数据集，如果 AOF 过大，则还原操作执行的时间就会非常长。")])]),v._v(" "),e("p",[v._v("为了解决 AOF 体积膨胀问题，Redis 提供了 AOF 重写功能，来对 AOF 文件进行压缩。"),e("strong",[v._v("AOF 重写可以产生一个新的 AOF 文件，这个新的 AOF 文件和原来的 AOF 文件所保存的数据库状态一致，但体积更小")]),v._v("。")]),v._v(" "),e("p",[v._v("AOF 重写并非读取和分析现有 AOF 文件的内容，而是直接从数据库中读取当前的数据库状态。即"),e("strong",[v._v("依次读取数据库中的每个键值对，然后用一条命令去记录该键值对")]),v._v("，以此代替之前可能存在冗余的命令。")]),v._v(" "),e("h4",{attrs:{id:"aof-后台重写"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aof-后台重写"}},[v._v("#")]),v._v(" AOF 后台重写")]),v._v(" "),e("p",[v._v("作为一种辅助性功能，显然 Redis 并不想在 AOF 重写时阻塞 Redis 服务接收其他命令。因此，Redis 决定通过 "),e("code",[v._v("BGREWRITEAOF")]),v._v(" 命令创建一个子进程，然后由子进程负责对 AOF 文件进行重写，这与 "),e("code",[v._v("BGSAVE")]),v._v(" 原理类似。")]),v._v(" "),e("ul",[e("li",[v._v("在执行 "),e("code",[v._v("BGREWRITEAOF")]),v._v(" 命令时，Redis 服务器会维护一个 AOF 重写缓冲区。当 AOF 重写子进程开始工作后，Redis 每执行完一个写命令，会同时将这个命令发送给 AOF 缓冲区和 AOF 重写缓冲区。")]),v._v(" "),e("li",[v._v("由于彼此不是在同一个进程中工作，AOF 重写不影响 AOF 写入和同步。当子进程完成创建新 AOF 文件的工作之后，服务器会将重写缓冲区中的所有内容追加到新 AOF 文件的末尾，使得新旧两个 AOF 文件所保存的数据库状态一致。")]),v._v(" "),e("li",[v._v("最后，服务器用新的 AOF 文件替换就的 AOF 文件，以此来完成 AOF 重写操作。")])]),v._v(" "),e("p",[e("img",{attrs:{src:"https://raw.githubusercontent.com/dunwu/images/dev/snap/20200130153716.png",alt:"img"}})]),v._v(" "),e("p",[v._v("可以通过设置 "),e("code",[v._v("auto-aof-rewrite-percentage")]),v._v(" 和 "),e("code",[v._v("auto-aof-rewrite-min-size")]),v._v("，使得 Redis 在满足条件时，自动执行 "),e("code",[v._v("BGREWRITEAOF")]),v._v("。")]),v._v(" "),e("p",[v._v("假设配置如下：")]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v("auto-aof-rewrite-percentage 100\nauto-aof-rewrite-min-size 64mb\n")])])]),e("p",[v._v("表明，当 AOF 大于 "),e("code",[v._v("64MB")]),v._v("，且 AOF 体积比上一次重写后的体积大了至少 "),e("code",[v._v("100%")]),v._v(" 时，执行 "),e("code",[v._v("BGREWRITEAOF")]),v._v("。")]),v._v(" "),e("h3",{attrs:{id:"aof-的配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aof-的配置"}},[v._v("#")]),v._v(" AOF 的配置")]),v._v(" "),e("p",[v._v("AOF 的默认配置：")]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v("appendonly no\nappendfsync everysec\nno-appendfsync-on-rewrite no\nauto-aof-rewrite-percentage 100\nauto-aof-rewrite-min-size 64mb\n")])])]),e("p",[v._v("AOF 持久化通过在 "),e("code",[v._v("redis.conf")]),v._v(" 中的 "),e("code",[v._v("appendonly yes")]),v._v(" 配置选项来开启。")]),v._v(" "),e("ul",[e("li",[e("strong",[e("code",[v._v("appendonly")])]),v._v(" - 开启 AOF 功能。")]),v._v(" "),e("li",[e("strong",[e("code",[v._v("appendfilename")])]),v._v(" - AOF 文件名。")]),v._v(" "),e("li",[e("strong",[e("code",[v._v("appendfsync")])]),v._v(" - 用于设置同步频率，它有以下可选项：\n"),e("ul",[e("li",[e("strong",[e("code",[v._v("always")])]),v._v(" - 每个 Redis 写命令都要同步写入硬盘。这样做会严重降低 Redis 的速度。")]),v._v(" "),e("li",[e("strong",[e("code",[v._v("everysec")])]),v._v(" - 每秒执行一次同步，显示地将多个写命令同步到硬盘。为了兼顾数据安全和写入性能，推荐使用 "),e("code",[v._v("appendfsync everysec")]),v._v(" 选项。Redis 每秒同步一次 AOF 文件时的性能和不使用任何持久化特性时的性能相差无几。")]),v._v(" "),e("li",[e("strong",[e("code",[v._v("no")])]),v._v(" - 让操作系统来决定应该何时进行同步。")])])]),v._v(" "),e("li",[e("code",[v._v("no-appendfsync-on-rewrite")]),v._v(" - AOF 重写时不支持追加命令。")]),v._v(" "),e("li",[e("code",[v._v("auto-aof-rewrite-percentage")]),v._v(" - AOF 重写百分比。")]),v._v(" "),e("li",[e("code",[v._v("auto-aof-rewrite-min-size")]),v._v(" - AOF 重写文件的最小大小。")]),v._v(" "),e("li",[e("code",[v._v("dir")]),v._v(" - RDB 文件和 AOF 文件的存储路径。")])]),v._v(" "),e("h2",{attrs:{id:"三、rdb-和-aof"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、rdb-和-aof"}},[v._v("#")]),v._v(" 三、RDB 和 AOF")]),v._v(" "),e("blockquote",[e("p",[v._v("当 Redis 启动时， 如果 RDB 和 AOF 功能都开启了，那么程序会优先使用 AOF 文件来恢复数据集，因为 AOF 文件所保存的数据通常是最完整的。")])]),v._v(" "),e("h3",{attrs:{id:"如何选择持久化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何选择持久化"}},[v._v("#")]),v._v(" 如何选择持久化")]),v._v(" "),e("ul",[e("li",[v._v("如果不关心数据丢失，可以不持久化。")]),v._v(" "),e("li",[v._v("如果可以承受数分钟以内的数据丢失，可以只使用 RDB。")]),v._v(" "),e("li",[v._v("如果不能承受数分钟以内的数据丢失，可以同时使用 RDB 和 AOF。")])]),v._v(" "),e("p",[v._v("有很多用户都只使用 AOF 持久化， 但并不推荐这种方式： 因为定时生成 RDB 快照（snapshot）非常便于进行数据库备份，并且快照恢复数据集的速度也要比 AOF 恢复的速度要快，除此之外，使用快照还可以避免之前提到的 AOF 程序的 bug 。")]),v._v(" "),e("h3",{attrs:{id:"rdb-切换为-aof"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rdb-切换为-aof"}},[v._v("#")]),v._v(" RDB 切换为 AOF")]),v._v(" "),e("p",[v._v("在 Redis 2.2 或以上版本，可以在不重启的情况下，从 RDB 切换为 AOF ：")]),v._v(" "),e("ul",[e("li",[v._v("为最新的 dump.rdb 文件创建一个备份。")]),v._v(" "),e("li",[v._v("将备份放到一个安全的地方。")]),v._v(" "),e("li",[v._v("执行以下两条命令:")]),v._v(" "),e("li",[v._v("redis-cli config set appendonly yes")]),v._v(" "),e("li",[v._v("redis-cli config set save")]),v._v(" "),e("li",[v._v("确保写命令会被正确地追加到 AOF 文件的末尾。")]),v._v(" "),e("li",[v._v("执行的第一条命令开启了 AOF 功能： Redis 会阻塞直到初始 AOF 文件创建完成为止， 之后 Redis 会继续处理命令请求， 并开始将写入命令追加到 AOF 文件末尾。")])]),v._v(" "),e("p",[v._v("执行的第二条命令用于关闭快照功能。 这一步是可选的， 如果你愿意的话， 也可以同时使用快照和 AOF 这两种持久化功能。")]),v._v(" "),e("blockquote",[e("p",[v._v("🔔 重要：别忘了在 "),e("code",[v._v("redis.conf")]),v._v(" 中打开 AOF 功能！否则的话，服务器重启之后，之前通过 CONFIG SET 设置的配置就会被遗忘，程序会按原来的配置来启动服务器。")])]),v._v(" "),e("h3",{attrs:{id:"aof-和-rdb-的相互作用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aof-和-rdb-的相互作用"}},[v._v("#")]),v._v(" AOF 和 RDB 的相互作用")]),v._v(" "),e("p",[e("code",[v._v("BGSAVE")]),v._v(" 和 "),e("code",[v._v("BGREWRITEAOF")]),v._v(" 命令不可以同时执行。这是为了避免两个 Redis 后台进程同时对磁盘进行大量的 I/O 操作。")]),v._v(" "),e("p",[v._v("如果 "),e("code",[v._v("BGSAVE")]),v._v(" 正在执行，并且用户显示地调用 "),e("code",[v._v("BGREWRITEAOF")]),v._v(" 命令，那么服务器将向用户回复一个 OK 状态，并告知用户，"),e("code",[v._v("BGREWRITEAOF")]),v._v(" 已经被预定执行。一旦 "),e("code",[v._v("BGSAVE")]),v._v(" 执行完毕， "),e("code",[v._v("BGREWRITEAOF")]),v._v(" 就会正式开始。")]),v._v(" "),e("h2",{attrs:{id:"四、redis-备份"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四、redis-备份"}},[v._v("#")]),v._v(" 四、Redis 备份")]),v._v(" "),e("p",[v._v("应该确保 Redis 数据有完整的备份。")]),v._v(" "),e("p",[v._v("备份 Redis 数据建议采用 RDB。")]),v._v(" "),e("h3",{attrs:{id:"备份过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#备份过程"}},[v._v("#")]),v._v(" 备份过程")]),v._v(" "),e("ol",[e("li",[v._v("创建一个定期任务（cron job），每小时将一个 RDB 文件备份到一个文件夹，并且每天将一个 RDB 文件备份到另一个文件夹。")]),v._v(" "),e("li",[v._v("确保快照的备份都带有相应的日期和时间信息，每次执行定期任务脚本时，使用 find 命令来删除过期的快照：比如说，你可以保留最近 48 小时内的每小时快照，还可以保留最近一两个月的每日快照。")]),v._v(" "),e("li",[v._v("至少每天一次，将 RDB 备份到你的数据中心之外，或者至少是备份到你运行 Redis 服务器的物理机器之外。")])]),v._v(" "),e("h3",{attrs:{id:"容灾备份"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#容灾备份"}},[v._v("#")]),v._v(" 容灾备份")]),v._v(" "),e("p",[v._v("Redis 的容灾备份基本上就是对数据进行备份，并将这些备份传送到多个不同的外部数据中心。")]),v._v(" "),e("p",[v._v("容灾备份可以在 Redis 运行并产生快照的主数据中心发生严重的问题时，仍然让数据处于安全状态。")]),v._v(" "),e("h2",{attrs:{id:"五、要点总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#五、要点总结"}},[v._v("#")]),v._v(" 五、要点总结")]),v._v(" "),e("p",[e("img",{attrs:{src:"https://raw.githubusercontent.com/dunwu/images/dev/snap/20200224214047.png",alt:"img"}})]),v._v(" "),e("h2",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[v._v("#")]),v._v(" 参考资料")]),v._v(" "),e("ul",[e("li",[e("strong",[v._v("官网")]),v._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://redis.io/",target:"_blank",rel:"noopener noreferrer"}},[v._v("Redis 官网"),e("OutboundLink")],1)]),v._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/antirez/redis",target:"_blank",rel:"noopener noreferrer"}},[v._v("Redis github"),e("OutboundLink")],1)]),v._v(" "),e("li",[e("a",{attrs:{href:"http://redis.cn/",target:"_blank",rel:"noopener noreferrer"}},[v._v("Redis 官方文档中文版"),e("OutboundLink")],1)])])]),v._v(" "),e("li",[e("strong",[v._v("书籍")]),v._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://item.jd.com/11791607.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("《Redis 实战》"),e("OutboundLink")],1)]),v._v(" "),e("li",[e("a",{attrs:{href:"https://item.jd.com/11486101.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("《Redis 设计与实现》"),e("OutboundLink")],1)])])]),v._v(" "),e("li",[e("strong",[v._v("教程")]),v._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"http://redisdoc.com/",target:"_blank",rel:"noopener noreferrer"}},[v._v("Redis 命令参考"),e("OutboundLink")],1)])])])])])}),[],!1,null,null,null);_.default=s.exports}}]);
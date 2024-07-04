import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 h-[30vh]">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold">Company Name</h3>
            <p className="text-sm">© 2024 Company Name. All rights reserved.</p>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white">Contact Us</a>
          </div>
        </div>
        <div className="flex justify-center mt-4 space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">
            <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
              <path d="M22.67 0H1.33A1.33 1.33 0 000 1.33v21.34A1.33 1.33 0 001.33 24h11.47v-9.33h-3.14v-3.63h3.14V8.35c0-3.1 1.9-4.79 4.66-4.79 1.33 0 2.47.1 2.81.14v3.25h-1.92c-1.5 0-1.8.71-1.8 1.76v2.31h3.6l-.47 3.63h-3.13V24h6.13A1.33 1.33 0 0024 22.67V1.33A1.33 1.33 0 0022.67 0z" />
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
              <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.724-.949.555-2.002.959-3.124 1.184-.897-.955-2.173-1.55-3.591-1.55-2.719 0-4.924 2.206-4.924 4.924 0 .39.043.765.127 1.124-4.09-.205-7.719-2.165-10.148-5.144-.424.725-.666 1.562-.666 2.456 0 1.696.863 3.188 2.175 4.067-.802-.026-1.555-.247-2.213-.616v.062c0 2.366 1.684 4.342 3.918 4.788-.41.111-.843.171-1.289.171-.315 0-.623-.031-.924-.088.623 1.944 2.431 3.357 4.576 3.396-1.676 1.314-3.791 2.1-6.084 2.1-.395 0-.785-.023-1.17-.068 2.168 1.389 4.74 2.199 7.512 2.199 9.025 0 13.963-7.476 13.963-13.963 0-.213-.005-.426-.014-.637.958-.693 1.79-1.56 2.448-2.548l-.047-.02z" />
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
              <path d="M12 2.04c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10zm1.638 14.937c-.488.082-.904.116-1.312.116-.9 0-1.7-.167-2.464-.5-.793-.337-1.486-.827-2.087-1.434a5.987 5.987 0 01-1.434-2.087c-.333-.764-.5-1.563-.5-2.464 0-.9.167-1.7.5-2.464a5.987 5.987 0 011.434-2.087c.601-.607 1.294-1.097 2.087-1.434.764-.333 1.563-.5 2.464-.5.9 0 1.7.167 2.464.5.793.337 1.486.827 2.087 1.434a5.987 5.987 0 011.434 2.087c.333.764.5 1.563.5 2.464 0 .9-.167 1.7-.5 2.464a5.987 5.987 0 01-1.434 2.087c-.601.607-1.294 1.097-2.087 1.434-.764.333-1.563.5-2.464.5-.407 0-.823-.034-1.311-.116zm.5-8.08c.268-.317.376-.734.3-1.15-.075-.416-.308-.771-.662-1.025-.355-.254-.785-.379-1.219-.363-.435.016-.855.161-1.183.413-.327.252-.554.597-.636.972-.082.376.019.77.277 1.07.259.3.645.471 1.045.454.4-.017.789-.155 1.086-.398.299-.242.514-.568.592-.943zm1.85 7.042c-.576.576-1.337.936-2.15 1.02-.812.084-1.62-.05-2.326-.378-.704-.329-1.333-.809-1.835-1.386-.501-.577-.875-1.247-1.097-1.967-.222-.719-.288-1.471-.192-2.211.095-.74.36-1.454.779-2.089.42-.635 1.002-1.166 1.706-1.554.705-.388 1.513-.618 2.345-.68.832-.062 1.663.05 2.43.327.767.277 1.473.707 2.073 1.27.6.564 1.07 1.254 1.377 2.015.308.761.444 1.579.396 2.387-.048.808-.256 1.6-.614 2.308-.357.707-.86 1.354-1.473 1.868-.614.514-1.32.907-2.072 1.136-.752.229-1.545.292-2.327.186-.783-.107-1.525-.396-2.185-.825zm-1.298-3.845c.027-.028.048-.061.074-.09.163-.18.327-.357.497-.527.171-.17.351-.338.535-.499.184-.161.376-.31.57-.447.194-.137.396-.253.601-.354.204-.102.415-.178.63-.225.214-.046.433-.068.652-.061.219.007.439.047.651.118.213.072.422.175.623.305.2.13.392.285.57.456.178.17.346.359.508.557.162.199.317.406.46.618.142.212.275.431.395.657.12.226.224.457.309.694.085.237.15.48.195.726.046.246.074.494.078.741.004.248-.011.495-.045.739-.034.244-.085.485-.152.721-.066.236-.147.467-.245.688-.098.221-.208.434-.333.637-.126.203-.266.397-.422.582-.155.185-.321.36-.498.525-.176.165-.363.317-.56.453-.196.137-.4.257-.61.36-.21.103-.425.186-.643.249-.219.063-.443.109-.669.139-.226.03-.454.044-.683.036-.23-.009-.458-.036-.681-.082-.224-.047-.44-.115-.649-.204-.209-.089-.41-.197-.603-.322-.193-.125-.377-.268-.549-.425-.171-.157-.329-.328-.473-.508-.144-.18-.272-.372-.384-.573-.112-.2-.207-.409-.283-.623-.076-.214-.131-.434-.167-.656-.036-.222-.05-.447-.043-.672.006-.225.04-.448.096-.669.057-.22.141-.435.252-.639.112-.203.24-.4.385-.584.144-.184.302-.357.47-.52zm-3.197-4.853c-.485.09-.967.242-1.426.456-.459.215-.896.489-1.297.817-.401.329-.763.715-1.076 1.146-.314.43-.577.901-.78 1.398-.204.497-.348 1.024-.425 1.566-.076.542-.078 1.094-.005 1.64.073.546.212 1.082.403 1.596.191.515.451 1.003.768 1.454.317.451.698.859 1.127 1.212.429.353.914.645 1.435.864.521.218 1.075.368 1.639.442.564.074 1.135.072 1.692-.006.558-.078 1.106-.228 1.631-.445.525-.217 1.022-.499 1.474-.841.453-.342.863-.747 1.217-1.203.354-.455.653-.96.888-1.503.236-.543.404-1.122.497-1.712.094-.59.112-1.188.053-1.782-.059-.594-.197-1.182-.402-1.749-.205-.567-.485-1.107-.832-1.604-.347-.497-.765-.954-1.246-1.363-.481-.41-1.017-.77-1.596-1.069-.579-.299-1.198-.532-1.843-.69-.645-.157-1.306-.244-1.972-.259zm2.543 7.948c-.206.203-.417.4-.637.588-.22.188-.448.363-.684.523-.235.16-.479.303-.728.428-.249.125-.505.232-.764.322-.259.089-.523.16-.791.213-.267.053-.537.089-.806.107-.27.018-.54.016-.808-.007-.267-.024-.534-.06-.796-.113-.263-.054-.522-.127-.774-.217-.251-.09-.496-.2-.731-.326-.236-.126-.463-.269-.676-.428-.214-.159-.42-.334-.611-.523-.191-.189-.367-.392-.524-.607-.157-.215-.301-.441-.427-.675-.126-.234-.234-.48-.324-.732-.089-.251-.159-.514-.207-.782-.048-.268-.073-.54-.074-.813 0-.273.027-.544.075-.813.048-.268.118-.531.207-.782.09-.252.198-.498.324-.732.126-.234.27-.46.427-.675.157-.215.333-.418.524-.607.191-.189.397-.364.611-.523.214-.159.44-.302.676-.428.236-.126.481-.236.731-.326.251-.09.511-.163.774-.217.263-.054.529-.088.796-.113.268-.023.538-.025.808-.007.27.018.539.054.806.107.268.053.532.124.791.213.259.09.515.197.764.322.249.125.493.268.728.428.236.16.464.335.684.523.22.188.431.385.637.588zm-5.828 3.168c-.468-.082-.92-.266-1.328-.54-.408-.274-.767-.637-1.058-1.058-.291-.42-.519-.888-.671-1.381-.152-.493-.229-1.007-.229-1.52 0-.513.077-1.027.229-1.52.152-.493.38-.961.671-1.381.291-.42.65-.784 1.058-1.058.408-.274.86-.458 1.328-.54.468-.082.948-.062 1.415.058.467.12.91.332 1.301.623.391.29.737.65 1.015 1.06.278.41.484.871.603 1.36.12.49.155.995.103 1.49-.052.496-.183.987-.396 1.442-.213.455-.52.873-.906 1.234-.386.361-.843.654-1.35.862-.507.208-1.052.313-1.606.313-.51 0-1.018-.08-1.506-.238zm6.033-6.31c-.199-.035-.399-.051-.6-.051-.201 0-.401.016-.6.051-.199.035-.396.086-.59.151-.195.066-.385.144-.569.235-.183.091-.36.195-.528.31-.167.116-.327.243-.477.378-.15.136-.291.281-.423.433-.131.152-.253.311-.364.476-.112.165-.214.336-.303.512-.09.175-.168.354-.235.538-.067.184-.122.372-.156.561-.034.189-.051.38-.051.572s.016.383.051.572c.034.189.089.377.156.561.067.184.145.363.235.538.09.176.191.347.303.512.111.165.233.324.364.476.132.152.273.297.423.433.15.135.31.262.477.378.168.115.345.219.528.31.184.091.374.169.569.235.194.065.391.116.59.151.199.035.399.051.6.051.201 0 .401-.016.6-.051.199-.035.396-.086.59-.151.195-.066.385-.144.569-.235.183-.091.36-.195.528-.31.167-.116.327-.243.477-.378.15-.136.291-.281.423-.433.131-.152.253-.311.364-.476.112-.165.214-.336.303-.512.09-.175.168-.354.235-.538.067-.184.122-.372.156-.561.034-.189.051-.38.051-.572s-.016-.383-.051-.572c-.034-.189-.089-.377-.156-.561-.067-.184-.145.363-.235.538-.09.176-.191.347-.303.512-.111.165-.233.324-.364.476-.132.152-.273.297-.423.433-.15.135-.31.262-.477.378-.168.115-.345.219-.528.31-.184.091-.374.169-.569.235-.194.065-.391.116-.59.151-.199.035-.399.051-.6.051-.201 0-.401-.016-.6-.051z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

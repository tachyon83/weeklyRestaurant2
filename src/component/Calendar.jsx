import React from "react";

const Calendar = (props) => {
  return(
  <div className="Calendar">
    <h2>12월 주간 식단표</h2>
    <ul className="Calendar__outline">
      <li className="Calendar__item">
        <div className="Calendar__day">
          <span>일</span>
          <b>18</b>
        </div>
        <div className="Calendar__menu">
          <div className="Calendar__section CalendarMenu">
            <div className="CalendarMenu__tag">
              <span>아침</span>
            </div>
            <div className="CalendarMenu__wrap">
              <div className="CalendarMenu__thumb">
                <img
                  src="https://www.paris.co.kr/wp-content/uploads/200312-_670-1280x1280.jpg"
                  alt=""
                />
              </div>
              <div className="CalendarMenu__title">토스트</div>
              <div className="CalendarMenu__hover">
                <button className="CalendarMenu__Button CalendarMenu__Button--more">
                  <i class="fas fa-search"></i>
                  <i className="ir">상세 보기</i>
                </button>
                <button className="CalendarMenu__Button CalendarMenu__Button--delete">
                  <i class="far fa-trash-alt"></i>
                  <i className="ir">메뉴 추가</i>
                </button>
              </div>
              <div className="CalendarMenu__hover">
                <button className="CalendarMenu__Button CalendarMenu__Button--more">
                  <i class="fas fa-search"></i>
                  <i className="ir">상세 보기</i>
                </button>
                <button className="CalendarMenu__Button CalendarMenu__Button--delete">
                  <i class="far fa-trash-alt"></i>
                  <i className="ir">메뉴 추가</i>
                </button>
              </div>
            </div>
          </div>
          <div className="Calendar__section CalendarMenu">
            <div className="CalendarMenu__tag">
              <span>점심</span>
            </div>
            <div className="CalendarMenu__wrap">
              <div className="CalendarMenu__thumb">
                <img
                  src="https://image.auction.co.kr/itemimage/1b/fb/ee/1bfbee3086.jpg"
                  alt=""
                />
              </div>
              <div className="CalendarMenu__title">닭도리탕</div>
              <div className="CalendarMenu__hover">
                <button className="CalendarMenu__Button CalendarMenu__Button--more">
                  <i class="fas fa-search"></i>
                  <i className="ir">상세 보기</i>
                </button>
                <button className="CalendarMenu__Button CalendarMenu__Button--delete">
                  <i class="far fa-trash-alt"></i>
                  <i className="ir">메뉴 추가</i>
                </button>
              </div>
            </div>
          </div>
          <div className="Calendar__section CalendarMenu">
            <div className="CalendarMenu__tag">
              <span>저녁</span>
            </div>
            <button className="CalendarMenu__Button CalendarMenu__Button--add">
              <i class="fas fa-plus"></i>
              <i className="ir">메뉴 추가</i>
            </button>
          </div>
        </div>
      </li>
      <li className="Calendar__item">
        <div className="Calendar__day">
          <span>월</span>
          <b>19</b>
        </div>
        <div className="Calendar__menu">
          <div className="Calendar__section CalendarMenu">
            <div className="CalendarMenu__tag">
              <span>아침</span>
            </div>
            <div className="CalendarMenu__wrap">
              <div className="CalendarMenu__thumb">
                <img
                  src="https://www.paris.co.kr/wp-content/uploads/200312-_670-1280x1280.jpg"
                  alt=""
                />
              </div>
              <div className="CalendarMenu__title">토스트</div>
              <div className="CalendarMenu__hover">
                <button className="CalendarMenu__Button CalendarMenu__Button--more">
                  <i class="fas fa-search"></i>
                  <i className="ir">상세 보기</i>
                </button>
                <button className="CalendarMenu__Button CalendarMenu__Button--delete">
                  <i class="far fa-trash-alt"></i>
                  <i className="ir">메뉴 추가</i>
                </button>
              </div>
              <div className="CalendarMenu__hover">
                <button className="CalendarMenu__Button CalendarMenu__Button--more">
                  <i class="fas fa-search"></i>
                  <i className="ir">상세 보기</i>
                </button>
                <button className="CalendarMenu__Button CalendarMenu__Button--delete">
                  <i class="far fa-trash-alt"></i>
                  <i className="ir">메뉴 추가</i>
                </button>
              </div>
            </div>
          </div>
          <div className="Calendar__section CalendarMenu">
            <div className="CalendarMenu__tag">
              <span>점심</span>
            </div>
            <div className="CalendarMenu__wrap">
              <div className="CalendarMenu__thumb">
                <img
                  src="https://image.auction.co.kr/itemimage/1b/fb/ee/1bfbee3086.jpg"
                  alt=""
                />
              </div>
              <div className="CalendarMenu__title">닭도리탕</div>
              <div className="CalendarMenu__hover">
                <button className="CalendarMenu__Button CalendarMenu__Button--more">
                  <i class="fas fa-search"></i>
                  <i className="ir">상세 보기</i>
                </button>
                <button className="CalendarMenu__Button CalendarMenu__Button--delete">
                  <i class="far fa-trash-alt"></i>
                  <i className="ir">메뉴 추가</i>
                </button>
              </div>
            </div>
          </div>
          <div className="Calendar__section CalendarMenu">
            <div className="CalendarMenu__tag">
              <span>저녁</span>
            </div>
            <button className="CalendarMenu__Button CalendarMenu__Button--add">
              <i class="fas fa-plus"></i>
              <i className="ir">메뉴 추가</i>
            </button>
          </div>
        </div>
      </li>
      <li className="Calendar__item">
        <div className="Calendar__day">
          <span>화</span>
          <b>20</b>
        </div>
        <div className="Calendar__menu">
          <div className="Calendar__section CalendarMenu">
            <div className="CalendarMenu__tag">
              <span>아침</span>
            </div>
            <div className="CalendarMenu__wrap">
              <div className="CalendarMenu__thumb">
                <img
                  src="https://www.paris.co.kr/wp-content/uploads/200312-_670-1280x1280.jpg"
                  alt=""
                />
              </div>
              <div className="CalendarMenu__title">토스트</div>
              <div className="CalendarMenu__hover">
                <button className="CalendarMenu__Button CalendarMenu__Button--more">
                  <i class="fas fa-search"></i>
                  <i className="ir">상세 보기</i>
                </button>
                <button className="CalendarMenu__Button CalendarMenu__Button--delete">
                  <i class="far fa-trash-alt"></i>
                  <i className="ir">메뉴 추가</i>
                </button>
              </div>
              <div className="CalendarMenu__hover">
                <button className="CalendarMenu__Button CalendarMenu__Button--more">
                  <i class="fas fa-search"></i>
                  <i className="ir">상세 보기</i>
                </button>
                <button className="CalendarMenu__Button CalendarMenu__Button--delete">
                  <i class="far fa-trash-alt"></i>
                  <i className="ir">메뉴 추가</i>
                </button>
              </div>
            </div>
          </div>
          <div className="Calendar__section CalendarMenu">
            <div className="CalendarMenu__tag">
              <span>점심</span>
            </div>
            <div className="CalendarMenu__wrap">
              <div className="CalendarMenu__thumb">
                <img
                  src="https://image.auction.co.kr/itemimage/1b/fb/ee/1bfbee3086.jpg"
                  alt=""
                />
              </div>
              <div className="CalendarMenu__title">닭도리탕</div>
              <div className="CalendarMenu__hover">
                <button className="CalendarMenu__Button CalendarMenu__Button--more">
                  <i class="fas fa-search"></i>
                  <i className="ir">상세 보기</i>
                </button>
                <button className="CalendarMenu__Button CalendarMenu__Button--delete">
                  <i class="far fa-trash-alt"></i>
                  <i className="ir">메뉴 추가</i>
                </button>
              </div>
            </div>
          </div>
          <div className="Calendar__section CalendarMenu">
            <div className="CalendarMenu__tag">
              <span>저녁</span>
            </div>
            <button className="CalendarMenu__Button CalendarMenu__Button--add">
              <i class="fas fa-plus"></i>
              <i className="ir">메뉴 추가</i>
            </button>
          </div>
        </div>
      </li>
      <li className="Calendar__item">
        <div className="Calendar__day">
          <span>수</span>
          <b>21</b>
        </div>
        <div className="Calendar__menu">
          <div className="Calendar__section CalendarMenu">
            <div className="CalendarMenu__tag">
              <span>아침</span>
            </div>
            <div className="CalendarMenu__wrap">
              <div className="CalendarMenu__thumb">
                <img
                  src="https://www.paris.co.kr/wp-content/uploads/200312-_670-1280x1280.jpg"
                  alt=""
                />
              </div>
              <div className="CalendarMenu__title">토스트</div>
              <div className="CalendarMenu__hover">
                <button className="CalendarMenu__Button CalendarMenu__Button--more">
                  <i class="fas fa-search"></i>
                  <i className="ir">상세 보기</i>
                </button>
                <button className="CalendarMenu__Button CalendarMenu__Button--delete">
                  <i class="far fa-trash-alt"></i>
                  <i className="ir">메뉴 추가</i>
                </button>
              </div>
              <div className="CalendarMenu__hover">
                <button className="CalendarMenu__Button CalendarMenu__Button--more">
                  <i class="fas fa-search"></i>
                  <i className="ir">상세 보기</i>
                </button>
                <button className="CalendarMenu__Button CalendarMenu__Button--delete">
                  <i class="far fa-trash-alt"></i>
                  <i className="ir">메뉴 추가</i>
                </button>
              </div>
              <div className="CalendarMenu__hover">
                <button className="CalendarMenu__Button CalendarMenu__Button--more">
                  <i class="fas fa-search"></i>
                  <i className="ir">상세 보기</i>
                </button>
                <button className="CalendarMenu__Button CalendarMenu__Button--delete">
                  <i class="far fa-trash-alt"></i>
                  <i className="ir">메뉴 추가</i>
                </button>
              </div>
            </div>
          </div>
          <div className="Calendar__section CalendarMenu">
            <div className="CalendarMenu__tag">
              <span>점심</span>
            </div>
            <div className="CalendarMenu__wrap">
              <div className="CalendarMenu__thumb">
                <img
                  src="https://image.auction.co.kr/itemimage/1b/fb/ee/1bfbee3086.jpg"
                  alt=""
                />
              </div>
              <div className="CalendarMenu__title">닭도리탕</div>
              <div className="CalendarMenu__hover">
                <button className="CalendarMenu__Button CalendarMenu__Button--more">
                  <i class="fas fa-search"></i>
                  <i className="ir">상세 보기</i>
                </button>
                <button className="CalendarMenu__Button CalendarMenu__Button--delete">
                  <i class="far fa-trash-alt"></i>
                  <i className="ir">메뉴 추가</i>
                </button>
              </div>
            </div>
          </div>
          <div className="Calendar__section CalendarMenu">
            <div className="CalendarMenu__tag">
              <span>저녁</span>
            </div>
            <button className="CalendarMenu__Button CalendarMenu__Button--add">
              <i class="fas fa-plus"></i>
              <i className="ir">메뉴 추가</i>
            </button>
          </div>
        </div>
      </li>
      <li className="Calendar__item">
        <div className="Calendar__day">
          <span>목</span>
          <b>22</b>
        </div>
        <div className="Calendar__menu">
          <div className="Calendar__section CalendarMenu">
            <div className="CalendarMenu__tag">
              <span>아침</span>
            </div>
            <div className="CalendarMenu__wrap">
              <div className="CalendarMenu__thumb">
                <img
                  src="https://www.paris.co.kr/wp-content/uploads/200312-_670-1280x1280.jpg"
                  alt=""
                />
              </div>
              <div className="CalendarMenu__title">토스트</div>
              <div className="CalendarMenu__hover">
                <button className="CalendarMenu__Button CalendarMenu__Button--more">
                  <i class="fas fa-search"></i>
                  <i className="ir">상세 보기</i>
                </button>
                <button className="CalendarMenu__Button CalendarMenu__Button--delete">
                  <i class="far fa-trash-alt"></i>
                  <i className="ir">메뉴 추가</i>
                </button>
              </div>
              <div className="CalendarMenu__hover">
                <button className="CalendarMenu__Button CalendarMenu__Button--more">
                  <i class="fas fa-search"></i>
                  <i className="ir">상세 보기</i>
                </button>
                <button className="CalendarMenu__Button CalendarMenu__Button--delete">
                  <i class="far fa-trash-alt"></i>
                  <i className="ir">메뉴 추가</i>
                </button>
              </div>
              <div className="CalendarMenu__hover">
                <button className="CalendarMenu__Button CalendarMenu__Button--more">
                  <i class="fas fa-search"></i>
                  <i className="ir">상세 보기</i>
                </button>
                <button className="CalendarMenu__Button CalendarMenu__Button--delete">
                  <i class="far fa-trash-alt"></i>
                  <i className="ir">메뉴 추가</i>
                </button>
              </div>
            </div>
          </div>
          <div className="Calendar__section CalendarMenu">
            <div className="CalendarMenu__tag">
              <span>점심</span>
            </div>
            <div className="CalendarMenu__wrap">
              <div className="CalendarMenu__thumb">
                <img
                  src="https://image.auction.co.kr/itemimage/1b/fb/ee/1bfbee3086.jpg"
                  alt=""
                />
              </div>
              <div className="CalendarMenu__title">닭도리탕</div>
              <div className="CalendarMenu__hover">
                <button className="CalendarMenu__Button CalendarMenu__Button--more">
                  <i class="fas fa-search"></i>
                  <i className="ir">상세 보기</i>
                </button>
                <button className="CalendarMenu__Button CalendarMenu__Button--delete">
                  <i class="far fa-trash-alt"></i>
                  <i className="ir">메뉴 추가</i>
                </button>
              </div>
            </div>
          </div>
          <div className="Calendar__section CalendarMenu">
            <div className="CalendarMenu__tag">
              <span>저녁</span>
            </div>
            <button className="CalendarMenu__Button CalendarMenu__Button--add">
              <i class="fas fa-plus"></i>
              <i className="ir">메뉴 추가</i>
            </button>
          </div>
        </div>
      </li>
      <li className="Calendar__item">
        <div className="Calendar__day">
          <span>금</span>
          <b>23</b>
        </div>
        <div className="Calendar__menu">
          <div className="Calendar__section CalendarMenu">
            <div className="CalendarMenu__tag">
              <span>아침</span>
            </div>
            <div className="CalendarMenu__wrap">
              <div className="CalendarMenu__thumb">
                <img
                  src="https://www.paris.co.kr/wp-content/uploads/200312-_670-1280x1280.jpg"
                  alt=""
                />
              </div>
              <div className="CalendarMenu__title">토스트</div>
              <div className="CalendarMenu__hover">
                <button className="CalendarMenu__Button CalendarMenu__Button--more">
                  <i class="fas fa-search"></i>
                  <i className="ir">상세 보기</i>
                </button>
                <button className="CalendarMenu__Button CalendarMenu__Button--delete">
                  <i class="far fa-trash-alt"></i>
                  <i className="ir">메뉴 추가</i>
                </button>
              </div>
              <div className="CalendarMenu__hover">
                <button className="CalendarMenu__Button CalendarMenu__Button--more">
                  <i class="fas fa-search"></i>
                  <i className="ir">상세 보기</i>
                </button>
                <button className="CalendarMenu__Button CalendarMenu__Button--delete">
                  <i class="far fa-trash-alt"></i>
                  <i className="ir">메뉴 추가</i>
                </button>
              </div>
            </div>
          </div>
          <div className="Calendar__section CalendarMenu">
            <div className="CalendarMenu__tag">
              <span>점심</span>
            </div>
            <div className="CalendarMenu__wrap">
              <div className="CalendarMenu__thumb">
                <img
                  src="https://image.auction.co.kr/itemimage/1b/fb/ee/1bfbee3086.jpg"
                  alt=""
                />
              </div>
              <div className="CalendarMenu__title">닭도리탕</div>
              <div className="CalendarMenu__hover">
                <button className="CalendarMenu__Button CalendarMenu__Button--more">
                  <i class="fas fa-search"></i>
                  <i className="ir">상세 보기</i>
                </button>
                <button className="CalendarMenu__Button CalendarMenu__Button--delete">
                  <i class="far fa-trash-alt"></i>
                  <i className="ir">메뉴 추가</i>
                </button>
              </div>
            </div>
          </div>
          <div className="Calendar__section CalendarMenu">
            <div className="CalendarMenu__tag">
              <span>저녁</span>
            </div>
            <button className="CalendarMenu__Button CalendarMenu__Button--add">
              <i class="fas fa-plus"></i>
              <i className="ir">메뉴 추가</i>
            </button>
          </div>
        </div>
      </li>
      <li className="Calendar__item">
        <div className="Calendar__day">
          <span>토</span>
          <b>24</b>
        </div>
        <div className="Calendar__menu">
          <div className="Calendar__section CalendarMenu">
            <div className="CalendarMenu__tag">
              <span>아침</span>
            </div>
            <div className="CalendarMenu__wrap">
              <div className="CalendarMenu__thumb">
                <img
                  src="https://www.paris.co.kr/wp-content/uploads/200312-_670-1280x1280.jpg"
                  alt=""
                />
              </div>
              <div className="CalendarMenu__title">토스트</div>
              <div className="CalendarMenu__hover">
                <button className="CalendarMenu__Button CalendarMenu__Button--more">
                  <i class="fas fa-search"></i>
                  <i className="ir">상세 보기</i>
                </button>
                <button className="CalendarMenu__Button CalendarMenu__Button--delete">
                  <i class="far fa-trash-alt"></i>
                  <i className="ir">메뉴 추가</i>
                </button>
              </div>
              <div className="CalendarMenu__hover">
                <button className="CalendarMenu__Button CalendarMenu__Button--more">
                  <i class="fas fa-search"></i>
                  <i className="ir">상세 보기</i>
                </button>
                <button className="CalendarMenu__Button CalendarMenu__Button--delete">
                  <i class="far fa-trash-alt"></i>
                  <i className="ir">메뉴 추가</i>
                </button>
              </div>
            </div>
          </div>
          <div className="Calendar__section CalendarMenu">
            <div className="CalendarMenu__tag">
              <span>점심</span>
            </div>
            <div className="CalendarMenu__wrap">
              <div className="CalendarMenu__thumb">
                <img
                  src="https://image.auction.co.kr/itemimage/1b/fb/ee/1bfbee3086.jpg"
                  alt=""
                />
              </div>
              <div className="CalendarMenu__title">닭도리탕</div>
              <div className="CalendarMenu__hover">
                <button className="CalendarMenu__Button CalendarMenu__Button--more">
                  <i class="fas fa-search"></i>
                  <i className="ir">상세 보기</i>
                </button>
                <button className="CalendarMenu__Button CalendarMenu__Button--delete">
                  <i class="far fa-trash-alt"></i>
                  <i className="ir">메뉴 추가</i>
                </button>
              </div>
            </div>
          </div>
          <div className="Calendar__section CalendarMenu">
            <div className="CalendarMenu__tag">
              <span>저녁</span>
            </div>
            <button className="CalendarMenu__Button CalendarMenu__Button--add">
              <i class="fas fa-plus"></i>
              <i className="ir">메뉴 추가</i>
            </button>
          </div>
        </div>
      </li>
    </ul>
  </div>
  );
};

export default Calendar;
